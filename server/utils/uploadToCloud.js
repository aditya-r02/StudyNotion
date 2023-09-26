const cloudinary = require('cloudinary').v2;

exports.uploadToCloud = async (image, folder, height, quality) => {

    let options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;
    options.resourse_type = "auto";

    //console.log("hello there")

    return await cloudinary.uploader.upload(image.tempFilePath, options);

}