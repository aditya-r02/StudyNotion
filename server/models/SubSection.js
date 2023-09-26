const mongoose = require('mongoose');

const subsectionSchema = new mongoose.Schema({
    title: {
        Type: String
    }, 
    time_duration: {
        Type: String,
    },
    description: {
        Type:String
    },
    video_url:{
        Type: String
    }
})

module.exports = mongoose.model("SubSection", subsectionSchema);