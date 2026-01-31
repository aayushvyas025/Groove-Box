import {v2 as cloudinary} from "cloudinary"
import { envSecrets } from "../helper/constants/constants.js"

const {cloudinaryApiKey, cloudinaryApiSecret, cloudinaryCloudName} = envSecrets; 

export const cloudinaryConfig = cloudinary.config({
    cloud_name:cloudinaryCloudName,
    api_key:cloudinaryApiKey,
    api_secret:cloudinaryApiSecret,
}); 








