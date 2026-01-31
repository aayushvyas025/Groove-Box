import { validateSongInputs } from "../../helper/utils/validations.js";

export  const checkAdmin = async(request, response, next) => {
    try {
        
    } catch (error) {
    next(error)
    }
}


export const createSongs = async(request, response, next) => {
  const {title, artist, imageUrl, audioUrl,duration, albumId} = request.body; 
  const {audioFile , imageFile} = request?.files; 
  const songValidationRes = validateSongInputs(title, artist, imageUrl, audioUrl, duration, albumId);
  
 try {

    
 } catch (error) {
    next(error);
 }
}