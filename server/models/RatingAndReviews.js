const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    user:{
        Type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        Type: Number,
    },
    review:{
        Type:String
    },
    course:{
        Type: mongoose.Schema.Types.ObjectId,
        ref:"Course",
        index: true,
        required: true
    }
})

module.exports = mongoose.model("RatingAndReviews", ratingSchema);