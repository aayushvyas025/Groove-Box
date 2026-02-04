import { serverMessages } from "../../helper/constants/serverMessages.js";
import { Song } from "../../model/song/song.model.js";

const { apiResponses, statusCode, songMessages } = serverMessages;

export const fetchAllSongs = async (request, response, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 }); // Here createdAt -1 means latest to oldest and if we give 1 value then oldest to latest data fetched from database.
    response.status(statusCode.ok).json({
      success: apiResponses.success,
      messages: songMessages.fetchAllSongs,
      songs,
    });
  } catch (error) {
    console.error(`${songMessages.errorFetchAllSongs} : ${error.message}`);
    next(error);
  }
};
