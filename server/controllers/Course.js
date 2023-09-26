const Course = require('../models/Course');
const User = require('../models/User')
const Category = require('../models/Category');
const uploadToCloud = require('../utils/uploadToCloud')

exports.createCourse = async(req, res) =>{
    try{
        const {course_name, course_description, whatYouWillLearn, price, category}
            = req.body();

        const thumbnail = req.files.thumbnail;

        if (!course_name || !course_description || !whatYouWillLearn || !price || !tag || !thumbnail){
            return res.status(400).json({
                success: false,
                message: "Incomplete info"
            })
        }

        const userId = req.user.id;

        const userDetails = await User.findById(userId);

        if (!userDetails){
            return res.status(404).json({
                success: false,
                message: "Invalid Instructor ID"
            })
        }

        const categoryDetails = await Category.findById(category);
        if(!categoryDetails) {
            return res.status(404).json({
                success:false,
                message:'Category Details not found',
            });
        }

        const image = await uploadToCloud(thumbnail, process.env.FOLDER);

        const newCourse = await Course.create({
            course_name, course_description, instructor: userId, whatYouWillLearn, price,
            thumbnail: image.secure_url
        })

        const updatedUser = await User.findByIdAndUpdate(userId, {$push:{courses: newCourse._id}}, {new:true});

        // tags ka schema update karna rehta hai

        return res.status(200).json({
            success: true,
            message: "New Course added successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some error occured during course creation"
        })
    }
}

exports.getCourseDetails = async(req, res) =>{
    try{
        const courseId = req.body;

        const courseDetails = await Course.findById(courseId)
        .populate({
            path:"instructor",
            populate:{
                path:"additional_details"
            }
        })
        .populate({
            path:"category"
        })
        .populate({
            path:"ratingAndReviews"
        })
        .populate({
            path:"SubSection",
            select: "email name"
        })

        if (!courseDetails){
            return res.status(400).json({
                success: false,
                message: "Invalid course id"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Course Details successfully retrieved"
        })

        
    }catch(error){
        return res.status(500).json({
            success: false,
            message:"Error occured while fetching course details"
        })
    }
}