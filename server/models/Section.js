const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    section_name:{
        Type: String
    },
    sub_section: [
        {
            Type: mongoose.Schema.Types.ObjectId,
            ref: "SubSection"
        }
    ]
})

module.exports = mongoose.model("Section", sectionSchema);