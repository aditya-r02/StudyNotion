const Course = require('../models/Course');
const Section = require('../models/Section');

//section creation
exports.createSection = async(req, res) =>{
    try{
        const {section_name, courseId} = req.body;

        //validate
        if (!section_name || !courseId){
            return res.status(400).json({
                success: false,
                message: "Enter complete details"
            })
        }

        const courseDetails =await  Course.findById(courseId);

        //validating course id
        if (!courseDetails){
            return res.status(400).json({
                success: false,
                message: "Invalid course id"
            })
        }

        const newSection = await Section.create({section_name});

        const updatedCourse = await Course.findByIdAndUpdate(courseId, {$push:{course_content: newSection}}, {new:true});

        return res.status(200).json({
            success: true,
            message: "Section created successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some error occured during section creation"
        })
    }
}

//update Section
exports.updateSection = async(req, res) =>{
    try{
        const {newName, sectionId} = req.body;

        if (!newName || !sectionId){
            return res.status(400).json({
                success: false,
                message: "Enter complete details"
            })
        }

        const sectionDetails = await Section.findByIdAndUpdate(sectionId, {section_name: newName}, {new:true});

        return res.status(200).json({
            success: true,
            message: "Section updated successfully"
        })


    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some eror occured during section update"
        })
    }
}

//delete section
exports.deleteSection = async(req, res) =>{
    try{
        const {sectionId, courseId} = req.body;

        if (!sectionId || !courseDetails){
            return res.status(400).json({
                success: false,
                message: "Enter complete details"
            })
        }

        const courseDetails = await Course.findByIdAndUpdate(courseId, {$pull:{course_content: sectionId}}, {new:true});

        await Section.findByIdAndDelete(sectionId);

        return res.status(200).json({
            success: true,
            message: "Section deleted successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"Some error occured during section deletion"
        })
    }
}