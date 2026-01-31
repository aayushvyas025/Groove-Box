import { cloudinaryConfig } from "../../config/cloudinary.js";
import { envSecrets } from "../constants/constants.js";
import { serverMessages } from "../constants/serverMessages.js";

const { apiResponses, fileUploadMessages } = serverMessages;
const { commonResponses } = apiResponses;
const { nodeEnvironment } = envSecrets;

export const apiErrorResponse = (error) => {
  console.error(`${commonResponses.serverError} ${error.message}`);
  return {
    success: apiResponses.failed,
    message: nodeEnvironment ? commonResponses.serverError : error.message,
  };
};

export const uploadToCloudinary = async (file) => {
  try {
    const uploadResult = await cloudinaryConfig.uploader.upload(
      file.tempFilePath,
      {
        resource_type: "auto",
      },
    );
    return uploadResult.secure_url;
  } catch (error) {
    console.error(`${fileUploadMessages.cloudinaryError}: ${error.message}`);
    throw new Error(`${fileUploadMessages.cloudinaryError}`); 
  }
};
