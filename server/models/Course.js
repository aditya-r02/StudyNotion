const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
    },
    course_description:{
        type:String
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    whatYouWillLearn:{
        type: String
    },
    course_content: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section"
    },
    ratingAndReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RatingAndReviews"
    }],
    price:{
        type: Number,
    },
    thumbnail:{
        type: String
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    tag:{
        type: [String]
    },
    students_enrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    instructions: {
		type: [String],
	},
	status: {
		type: String,
		enum: ["Draft", "Published"],
	}, 
})

module.exports = mongoose.model("Course", courseSchema);