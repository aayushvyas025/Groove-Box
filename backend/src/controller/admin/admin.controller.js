import { serverMessages } from "../../helper/constants/serverMessages.js";
import {
  validateFileUpload,
  validateSongInputs,
} from "../../helper/utils/validations.js";
import { Album } from "../../model/album/album.model.js";
import { Song } from "../../model/song/song.model.js";

const { statusCode } = serverMessages;

export const checkAdmin = async (request, response, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const createSongs = async (request, response, next) => {
  const { title, artist, duration, albumId } = request.body;
  const audioFile = request?.files?.audioFile;
  const imageFile = request?.files?.imageFile;
  const songValidResponse = validateSongInputs(
    title,
    artist,
    duration,
    albumId,
  );
  const validFileUploadsResponse = validateFileUpload(audioFile, imageFile);

  if (!validFileUploadsResponse.success) {
    return response
      .status(statusCode.badRequest)
      .json(validFileUploadsResponse);
  }

  try {
    const song = new Song({
      title,
      artist,
      imageUrl,
      audioUrl,
      duration,
      albumId: albumId || null,
    });

    await song.save(); 

    if(albumId) {
        // pushing song into specific album which associated with that id 
        await Album.findByIdAndUpdate(albumId), {
            $push:{songs:song._id}
        }; 
    }
  } catch (error) {
    next(error);
  }
};
