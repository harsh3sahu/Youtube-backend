import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
import { ApiError } from './ApiError.js';


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try{

        if(!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        fs.unlinkSync(localFilePath);
        // console.log("file is successfully uploaded ", response.url);
        return response;

    }
    catch(error){

        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload has failed

        return null

    }
}

const deleteFromCloudinary = async(avatarUrl) => {
    try {
        if (!avatarUrl) return null;

        const response = await cloudinary.uploader.destroy(avatarUrl);
        return response;
    } catch (error) {
        console.error("Error deleting from Cloudinary:", error);
        return null;
    }
}

export {uploadOnCloudinary,deleteFromCloudinary}