const User = require('../models/User')
const Profile = require('../models/Profile')
const schedule = require('node-schedule'); 
const {uploadToCloud} = require('../utils/uploadToCloud');

// delete account
exports.deleteProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const deleteDate = new Date(Date.now() + 1000 * 60 * 5) 
        const user = await User.findByIdAndUpdate(userId, {active:false});

        schedule.scheduleJob(deleteDate, async () => {
            try {
                const userDetails = await User.findById(userId);

                if (userDetails.active===true) return;

                const profileId = userDetails.additional_details;

                await Profile.findByIdAndDelete(profileId);

                await User.findByIdAndDelete(userId);

                return res.status(200).json({
                    success: true,
                    message: "User account deleted successfully"
                })
            }
            catch(error){
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Error during account deletion"
                })
            }
        })

        return res.status(200).json({
            success: true,
            message: "User account deleted successfully"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Some error occured during profile deletion"
        })
    }
}

//update additional details
exports.updateProfile = async(req, res) =>{
    try{
        const userId = req.user.id;

        const details = req.body;
        //console.log(details)

        const userDetails = await User.findById(userId);

        const profileId = userDetails.additional_details;

        const updatedProfile = await Profile.findByIdAndUpdate(profileId, details, {new:true});
        //console.log(updatedProfile)

        const updatedUser = await User.findByIdAndUpdate(userId,{first_name:details.first_name, last_name:details.last_name},
            {new:true})
        .populate("additional_details").exec()

        return res.status(200).json({
            success: true,
            message: "Profile updated Successfully",
            userDetails: updatedUser
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message:"Error occured during profile updation"
        })
    }
}

//remove profile photo
exports.removeProfilePicture = async(req, res) =>{
    try{
        const userId = req.user.id; 
        
        const {first_name, last_name} = await User.findById(userId);

        const imageUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${first_name} ${last_name}`

        const userDetails = await User.findByIdAndUpdate(userId, {image:imageUrl}, {new:true})
        .populate("additional_details");

        return res.status(200).json({
            success: true,
            message:"Image updated successfully",
            userDetails
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Error occured during profile pic updation"
        })
    }
}

//update Profile picture
exports.updateProfilePicture = async(req, res) =>{
    try{
        const userId = req.user.id; 
        const image = req.files.image;

        console.log(image);

        const imageUpload = await uploadToCloud(image, "/StudyNotion");

        const userDetails = await User.findByIdAndUpdate(userId, {image:imageUpload.secure_url}, {new:true})
        .populate("additional_details");

        return res.status(200).json({
            success: true,
            message:"Image updated successfully",
            userDetails
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Error occured during profile pic updation"
        })
    }
}