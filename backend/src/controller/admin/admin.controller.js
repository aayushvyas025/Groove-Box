import { serverMessages } from "../../helper/constants/serverMessages.js";
import {
  uploadToCloudinary,
  validIdChecker,
} from "../../helper/utils/helpers.js";
import {
  validateAlbumInputs,
  validateFileUpload,
  validateSongInputs,
} from "../../helper/utils/validations.js";
import { Album } from "../../model/album/album.model.js";
import { Song } from "../../model/song/song.model.js";

const { statusCode, apiResponses, albumMessages, adminMessages } =
  serverMessages;
const { adminSongsMessages, adminAlbumMessages } = adminMessages;

export const checkAdmin = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`:${error.message}`);
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
  const validAudioUpload = validateFileUpload(audioFile);
  const validImageUpload = validateFileUpload(imageFile);

  if (!validSongResponse.success) {
    return response.status(statusCode.badRequest).json(validSongResponse);
  }

  if (!validAudioUpload.success || !validImageUpload.success) {
    return response
      .status(statusCode.badRequest)
      .json(!validAudioUpload.success ? validAudioUpload : validImageUpload);
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
  if (!validIdResponse.success) {
    return response.status(statusCode.notFound).json(validIdResponse);
  }
  try {
    const song = await Song.findById(id);

    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { songs: song._id },
      });
    }
    await Song.findByIdAndDelete(id);
    response.status(statusCode.ok).json({
      success: apiResponses.success,
      message: adminSongsMessages.songDeleted,
      song,
    });
  } catch (error) {
    console.error(`${adminSongsMessages.songDeletionError}: ${error.message}`);
    next(error);
  }
};

export const createAlbum = async (request, response, next) => {
  const imageFile = request?.files?.imageFile;
  const { title, artist, releaseYear } = request.body;
  const validFileUpload = validateFileUpload(imageFile);
  const validAlbumResponse = validateAlbumInputs(title, artist, releaseYear);

  if (!validAlbumResponse.success) {
    return response.status(statusCode.badRequest).json(validAlbumResponse);
  }

  if (!validFileUpload.success) {
    return response.status(statusCode.badRequest).json(validFileUpload);
  }

  try {
    const imageUrl = await uploadToCloudinary(imageFile);

    const album = new Album({
      title,
      artist,
      imageUrl,
      releaseYear,
    });

    await album.save();
    response
      .status(statusCode.created)
      .json({
        success: apiResponses.success,
        message: adminAlbumMessages.albumCreated,
        album,
      });
  } catch (error) {
    console.error(
      `${adminAlbumMessages.albumCreationError} : ${error.message}`,
    );
    next(error);
  }
};

export const deleteAlbum = async (request, response, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
