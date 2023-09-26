const express = require('express');
const router = express.Router();

const {sendOTP, signup, login, changePassword, forgotPassword, resetPassword} = require('../controllers/Auth');

//send otp
router.post("/sendotp", sendOTP);

//signup
router.post("/signup", signup);

//login
router.post("/login", login);

//forgot password
router.put("/forgotpassword", forgotPassword) 

//reset password
router.put("/resetpassword", resetPassword)





module.exports = router;