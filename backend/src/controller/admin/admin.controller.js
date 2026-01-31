import { serverMessages } from "../../helper/constants/serverMessages.js";
import { validateFileUpload, validateSongInputs } from "../../helper/utils/validations.js";

const {statusCode} = serverMessages; 


export  const checkAdmin = async(request, response, next) => {
    try {
        
    } catch (error) {
    next(error)
    }
}


export const createSongs = async(request, response, next) => {
  const {title, artist, imageUrl, audioUrl,duration, albumId} = request.body; 
  const audioFile = request?.files?.audioFile; 
  const imageFile = request?.files?.imageFile; 
  const songValidationRes = validateSongInputs(title, artist, imageUrl, audioUrl, duration, albumId);
  const validFileUploadsRes = validateFileUpload(audioFile, imageFile);

  if(!validFileUploadsRes.success) {
    return response.status(statusCode.badRequest).json(validFileUploadsRes);
  }

 try {

    
 } catch (error) {
    next(error);
 }
}