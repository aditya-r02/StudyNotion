const { default: mongoose } = require('mongoose');
const Course = require('../models/Course')
const RatingAndReviews = require('../models/RatingAndReviews')

exports.createRating = async(req, res) =>{
    try{
        const userId = new mongoose.Types.ObjectId(req.user.id);
        const {courseId, rating, review} = req.body;

        const courseDetails = await Course.findById(courseId);

        if (!courseDetails.students_enrolled.includes(userId)){
            return res.status(400).json({
                success: false,
                message: "Student not enrolled in this course"
            })
        }

        const prevReview = await RatingAndReviews.findOne({user:userId, course: courseId});

        if (prevReview){
            return res.status(400).json({
                success: true,
                message: "You have already enrolled in this course"
            })
        }

        const newReview = await RatingAndReviews.create({user:userId, 
                            course:courseId, rating, review});
        
        const updatedCourse = await Course.findByIdAndUpdate(courseId, {$push:{ratingAndReviews: newReview._id}});

        return res.status(200).json({
            success: true,
            message: "Review added successfully"
        })
        
    }catch(error){
        return res.status(500).json({
            success: false,
            message:"Error occured during rating creation"
        })
    }
}

exports.getAverageRating = async(req, res) =>{
    try{
        const {courseId} = req.body;

        const allReviews = await RatingAndReviews.find({course:courseId});

        let total = 0;
        let n = 0;
        allReviews.forEach((review)=>{
            total += review.rating;
            n++;
        })

        const average = total/n;

        return res.status(200).json({
            success: true,
            average,
            message: "Average rating retrieved successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"Error occured while getting average review"
        })
    }
}