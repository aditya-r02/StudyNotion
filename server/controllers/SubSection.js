const Section = require('../models/Section')
const SubSection = require('../models/SubSection')
const uploadToCloud = require('../utils/uploadToCloud');
require('dotenv').config();

//subsection creation
exports.createSubSection  = async(req, res) =>{
    try{
        const {title, time_duration, description, sectionId} = req.body;

        const video = req.files.video;

        if (!title || !time_duration || !description || !video){
            return res.status(400).json({
                success: false,
                message: "Enter complete details"
            })
        }

        const video_details = uploadToCloud(video, process.env.FOLDER);

        const subSectionDetails = await SubSection.create({title, description, time_duration, video_url: video_details.secure_url});

        const updatedSection = await Section.findByIdAndUpdate(sectionId, {$push:{sub_section: subSectionDetails._id}}, {
            new:true
        });

        return res.status(200).json({
            success: true,
            message: "Subsection created successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some error occured during subsection creation"
        })
    }
}

//subsection update
exports.updateSubSection = async(req, res) =>{
    try{
        const {title=null, description=null, time_duration=null, subSectionId} = req.body;

        const {video=null} = req.files.video;

        const subSectionDetails = await SubSection.findById(subSectionId);

        if (title) subSectionDetails.title = title;
        if (description) subSectionDetails.description = description;
        if (time_duration) subSectionDetails.time_duration = time_duration;
        if (video){
            const video_details = await uploadToCloud(video, process.env.FOLDER);
            subSectionDetails.video_url = video_details.secure_url;
        }

        return res.status(200).json({
            success: true,
            message: "SuSection updated successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"Some Error occured during subsection updation"
        })
    }
}

//subsection deletion