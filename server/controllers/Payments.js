const Course = require('../models/Course')
const User = require('../models/User')
const {options} = require('../config/razorpay');
const instance = require('../config/razorpay');
const {mailSender} = require('../utils/nodeMailer')
const courseEnrollmentEmail = require('../mail/templates/courseEnrollmentEmail')

exports.capturePayment = async(req, res) =>{
    try{
        const {course_id} = req.body;
        const user_id = req.user.id;

        if (!course_id || !user_id){
            return res.status(400).json({
                success: false,
                message:"Enter complete details"
            })
        }

        const courseDetails = await Course.findById(course_id);

        if (!courseDetails){
            return res.status(400).json({
                success: false,
                message: "Invalid course id"
            })
        }

        const isAlreadyEnrolled  = courseDetails.students_enrolled.some((id)=>{
            return id==user_id
        })

        if (isAlreadyEnrolled){
            return res.status(400).json({
                success: false,
                message:"You are already enrolled in this course",
            })
        }

        const amount = courseDetails.price;
        const curreny = "INR";
        const options = {
            amount: amount*100,
            curreny,
            receipt: Math.random(Date.now()).toString(),
            notes:{
                courseId: course_id,
                userId : user_id
            }
        }

        const paymentDetails = instance.orders.create(options);

        return res.status(200).json({
            success: true,
            courseName: courseDetails.course_name,
            courseDetails: courseDetails.course_description,
            thumbnail: courseDetails.thumbnail,
            orderId: paymentDetails.id,
            curreny: paymentDetails.curreny,
            amount: paymentDetails.amount
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some error occured while capturing payments"
        })
    }
}

//verfying signature

exports.verifySignature = async(req, res) =>{
    try{
        const webHookSecret = "123456";

        const signature = req.headers("x-razorpay-signature")

        const shasum = crypto.createHmac("sha256", webHookSecret);

        shasum.update(JSON.stringify(req.body));

        const digest = shasum.digest("hex");

        if (!signature!== digest){
            return res.status(400).json({
                success: false,
                message: "Invalid Request"
            })
        }

        const {userId, courseId} = req.body.payload.entity.notes;

        const courseDetails = await Course.findByIdAndUpdate(courseId, {$push:{students_enrolled: userId}},{new:true});

        const userDetails = await User.findByIdAndUpdate(userId, {$push:{courses: courseId}}, {new:true});

        const emailToUser = await mailSender(userDetails.email,
            "Course Enrolled!!",
            courseEnrollmentEmail);

        return res.status(200).json({
            success: true, 
            message: "Signature verified and Course Added"
        })



    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Error while verifying signature"
        })
    }
}