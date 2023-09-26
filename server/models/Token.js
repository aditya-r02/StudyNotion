const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
    value:{
        type: String,
    },
    email:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 5*60* 1000
    }
})

module.exports = mongoose.model("Token", TokenSchema);