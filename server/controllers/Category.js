const Category  = require('../models/Category');

exports.getAllCategory = async (req, res) =>{
    try{
        const data = await Category.find({});

        return res.status(200).json({
            success: true,
            message:"Categories sent successfully",
            data
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"error occured"
        })
    }
} 