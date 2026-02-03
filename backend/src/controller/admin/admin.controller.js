import { serverMessages } from "../../helper/constants/serverMessages.js";
import {
  uploadToCloudinary,
  validIdChecker,
} from "../../helper/utils/helpers.js";
import {
  validateFileUpload,
  validateSongInputs,
} from "../../helper/utils/validations.js";
import { Album } from "../../model/album/album.model.js";
import { Song } from "../../model/song/song.model.js";

const { statusCode, apiResponses, albumMessages,adminMessages } = serverMessages;
const {adminSongsMessages} = adminMessages;

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
  const validSongResponse = validateSongInputs(
    title,
    artist,
    duration,
    albumId,
  );
  const validFileUploadsResponse = validateFileUpload(audioFile, imageFile);

  if (!validSongResponse.success) {
    return response.status(statusCode.badRequest).json(validSongResponse);
  }

  if (!validFileUploadsResponse.success) {
    return response
      .status(statusCode.badRequest)
      .json(validFileUploadsResponse);
  }

  try {
    const [audioUrl, imageUrl] = await Promise.all([
      uploadToCloudinary(audioFile),
      uploadToCloudinary(imageFile),
    ]);

    const song = new Song({
      title,
      artist,
      imageUrl,
      audioUrl,
      duration,
      albumId: albumId || null,
    });

    await song.save();

    if (albumId) {
      const album = await Album.findById(albumId);
      if (!album) {
        return response.status(statusCode.notFound).json({
          success: apiResponses.failed,
          message: albumMessages.albumNotFound,
        });
      }
      // pushing song into specific album which associated with that id
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      });
    }
    response.status(statusCode.created).json({ ...validSongResponse, song });
  } catch (error) {
    console.error(`${adminSongsMessages.songCreationError}: ${error.message}`);
    next(error);
  }
};

export const deleteSongs = async (request, response, next) => {
  const { id } = request.params;
  const validIdResponse = validIdChecker(id);
  if (!validIdResponse) {
    return response.status(statusCode.notFound).json(validIdResponse);
  }
  try {
    const song = await Song.findByIdAndDelete(id);
  } catch (error) {
    console.error(`${adminSongsMessages.songDeletionError}: ${error.message}`)
    next(error);
  }
};
