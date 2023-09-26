const User = require('../models/User');
const Profile = require('../models/Profile')
const OTP = require('../models/OTP')
const Token = require('../models/Token')
const crypto = require('crypto')

require('dotenv').config();
const otpGenerator = require('otp-generator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mailSender = require('../utils/nodeMailer')

// OTP Send
exports.sendOTP = async(req, res)  =>{
    try{
        const {
            first_name,
            last_name,
            email,
            password,
            confirm_password,
            account_type,
        } = req.body;

        if (!first_name || !last_name || !email || !password || !confirm_password){
            return res.status(400).json({
                success: false,
                message: "Enter Complete details"
            })
        }

        if (password !== confirm_password){
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            })
        }

        const previousUser = await User.findOne({email});

        if (previousUser){
            return res.status(403).json({
                success: false,
                message: 'User already exists'
            })
        }

        let otp =otpGenerator.generate(6, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        })

        const currentOTP = await OTP.create(
            {email, otp}
        )

        console.log(currentOTP)

        return res.status(200).json({
            success: true,
            otpdetails: currentOTP,
            message: "otp has been generated and sent successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Some error occured while sending otp'
        })
    }
}

// Signup
exports.signup = async(req, res) =>{
    try{
        const {
            first_name,
            last_name,
            email,
            password,
            account_type,
            otp

        } = req.body;

        //console.log(req.body);
        let otp1 = otp.toString().trim();
        //console.log("otp->", otp1)
        if (otp==undefined){
            return res.status(400).json({
                success: false,
                message: "fill otp"
            })
        }
        

        const prev_user = await User.findOne({email});

        if (prev_user){
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            })
        }

        const last_otp = await OTP.find({email}).sort({createdAt:-1}).limit(1);

        //console.log(last_otp);
        if (last_otp.length()===0){
            return res.status(400).json({
                success: false,
                message:"Some error occured, try resend otp"
            })
        }

        if (otp== last_otp[0].otp){
            const hashed_pass = await bcrypt.hash(password, 10);

            const profile_details = await Profile.create({});

            //console.log("hello");

            const new_user = await User.create({
                first_name, last_name, email, password: hashed_pass, account_type, additional_details: profile_details._id,
                image: `https://api.dicebear.com/5.x/initials/svg?seed=${first_name} ${last_name}`
            })

            return res.status(200).json({
                success: true,
                last_otp,
                message: "Signup Successful"
            })
        }
        else{
            return res.status(409).json({
                success: false,
                last_otp,
                message: "Invalid OTP"
            })
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error,
            success: false,
            message: 'Some Error occured during signup, try again'
        })
    }
}

//Login
exports.login = async (req, res) =>{
    try{
        const {email, password, account_type} = req.body;

        if (!email || !password){
            return res.status(409).json({
                success: false,
                message: "All Fields are necessary"
            })
        }

        const prev_user = await User.findOne({email, account_type})
                            .populate("additional_details");

        if (!prev_user){
            return res.status(404).json({
                success: false,
                message: "user does not exists"
            })
        }

        if (!await bcrypt.compare(password, prev_user.password)){
            return res.status(500).json({
                success: false,
                message: "Incorrect Password"
            })
        }

        await User.findOneAndUpdate({email, account_type}, {active:true});

        const payload = {email,account_type:prev_user.account_type, id: prev_user._id};

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "3d"
        })

        prev_user.password = undefined;
        prev_user.token = token;

        const options = {
            expires: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly: true
        }

        res.cookie("token", token, options).status(200).json({
            success: true,
            message: "Login Successful",
            token,
            userDetails: prev_user,
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some error occured during login"
        })
    }
}

//change password
exports.changePassword = async(req, res) =>{
    try{
        const {password, newPassword, confirmPassword} = req.body;

        const id = req.user.id;
        //console.log(id);

        if (!password || !newPassword || !confirmPassword){
            return res.status(500).json({
                success: false,
                message: "All fields are necessary"
            })
        }

        if (newPassword !== confirmPassword){
            return res.status(409).json({
                success: false,
                message: "Passwords do not match"
            })
        }

        const user = await User.findOne({_id:id});
        //console.log(user)

        if (!user){
            return res.status(400).json({
                success: false,
                message: "Email does not exists"
            })
        }
        //console.log("hello1")
        if (!(await bcrypt.compare(password, user.password))){
            return res.status(400).json({
                success: false,
                message: "Wrong password entered"
            })
        }
        //console.log("hello2")

        const hashed_pass =await bcrypt.hash(newPassword, 10);

        const new_user = await User.findOneAndUpdate({_id:id}, {password: hashed_pass});

        return res.status(200).json({
            success: true,
            message: "Password Changed Successfully"
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: `Error occured during password change: ${error}`
        })
    }
}

//forget otp
exports.forgotPassword = async(req, res) =>{
    try{
        const {email} = req.body;

        const previousUser = await User.findOne({email});

        if (!previousUser){
            console.log("Hello");
            return res.status(400).json({
                success: false,
                message: 'User does not exists'
            })
        }

        const token = crypto.randomBytes(20).toString("hex");

        const UpdatedUser = await User.findOne({email}, {token: token}, {new:true});

        const updatedToken = await Token.create({email, value:token});

        const url = "http://localhost:3000/reset-password/"+token;

        await mailSender(email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`)

        return res.status(200).json({
            success: true,
            message: "Email Sent successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Some error occured while sending otp'
        })
    }
}

//reset Password in case forgotton
exports.resetPassword = async(req, res) =>{
    try{
        const {password, confirmPassword, token} = req.body;

        if (password!==confirmPassword){
            return res.status(400).json({
                success: false,
                message:"Passwords do not match"
            })
        }

        const last_token = await Token.find({value: token}).sort({createdAt:-1}).limit(1);

        if (token!=last_token[0].value){
            return res.status(400).json({
                success: false,
                message: "Invalid token"
            })
        }

        const hashed_pass = await bcrypt.hash(password, 10);

        const userDetails = await User.findOneAndUpdate({email:last_token[0].email}, {password:hashed_pass}, {new:true});

        await Token.findByIdAndDelete(last_token[0]._id);

        //console.log(userDetails)

        return res.status(200).json({
            success: true,
            message:"Password updated successfully"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Error occured during password reset"
        })
    }
}


