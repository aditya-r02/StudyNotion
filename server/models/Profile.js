const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender:{
        type: String,
        default: null
    },
    date_of_birth: {
        type: String,
        default: null
    },
    about:{
        type: String,
        trim: true,
        default: null
    },
    phone_no:{
        type: Number,
        default: null
    },
    country:{
        type:String,
        default: null
    }
})

module.exports = mongoose.model("Profile", profileSchema);