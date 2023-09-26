const User = require('../models/User');
const Course = require('../models/Course');
const CourseProgress = require('../models/CourseProgress')

exports.getUserDetails = async(req, res) =>{
    try{
        const userId = req.user.id;

        console.log(userId);

        const userDetails = await User.findById(userId)
        .populate({
            path:"additional_details"
        })
        .populate({
            path: "courses",
            select:"name"
        })
        .populate({
            path:"courseProgress"
        })
        .exec();

        return res.status(200).json({
            success: true,
            message:"Details fetched successfully",
            userDetails
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"SOme error occured while fetching details",

        })
    }
}

