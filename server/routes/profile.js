const express = require('express');
const router = express.Router();

const {auth} = require('../middleware/Auth');
const {deleteProfile, updateProfile, updateProfilePicture,
removeProfilePicture} = require('../controllers/Profile')
const {resetPassword, forgetOTP, changePassword} = require('../controllers/Auth')
const {getUserDetails} = require('../controllers/User')
const {getAllCategory} = require('../controllers/Category')

//delete user profile
router.delete("/deleteprofile", auth, deleteProfile);

// forget password otp
//router.post("/forgetotp", forgetOTP);

//forget password
router.put("/forgetpassword", resetPassword)

//get user details
router.get('/userdetails', auth, getUserDetails);

//update addtional details
router.put("/updateprofile", auth, updateProfile)

//remove profile picture
router.put("/removeDisplayPicture", auth, removeProfilePicture);

//update profile picture
router.put("/updateDisplayPicture", auth, updateProfilePicture)

//change password
router.put("/changepassword", auth, changePassword)

router.get("/getallcategory", getAllCategory);

module.exports = router;