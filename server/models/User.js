const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    account_type:{
        type: String,
        enum: ["Admin", "Student", "Instructor"],
        required: true,
        trim: true
    },
    active:{
        type: Boolean,
        default: true,
    },
    approved:{
        type: Boolean,
        default: true
    },
    additional_details:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    courses: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    token:{
        type: String,
    },
    resetPasswordExpires:{
        type: Date,
    },
    image:{
        type:String,
        required:true,
    },
    courseProgress: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",
        }
    ],
    wishlist:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ]

}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);