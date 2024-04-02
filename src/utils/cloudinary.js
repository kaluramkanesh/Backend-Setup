// const { v2 } = require("cloudinary")
const cloudinary = require('cloudinary').v2;
const fs = require("fs")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload_on_cloudinary = async (local_file_path) => {
    try {
        if (!local_file_path) return null
        // upload the file on cloudinary
        const result = await cloudinary.uploader.upload(local_file_path, {
            resource_type: 'auto'
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary")
        return result
    } catch (error) {
        console.log(error)
        fs.unlinkSync(local_file_path) //remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

module.exports = { upload_on_cloudinary }