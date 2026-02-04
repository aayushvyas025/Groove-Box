import { serverMessages } from "../../helper/constants/serverMessages.js";
import { Song } from "../../model/song/song.model.js";

const { apiResponses, statusCode, songMessages } = serverMessages;

export const fetchAllSongs = async (_, response, next) => {
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

export const fetchTrendingSongs = async (_, response, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: {
          size: 6,
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    response.status(statusCode.ok).json({
      success: apiResponses.success,
      message: songMessages.trendingSongs,
      trendingSongs: songs,
    });
  } catch (error) {
    console.error(`${songMessages.trendingSongsError}: ${error.message}`);
    next(error);
  }
};

export const fetchUserPreferenceSongs = async (_, response, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    response.status(statusCode.ok).json({
      success: apiResponses.success,
      message: songMessages.userPreferenceSongs,
      userPreferenceSongs: songs,
    });
  } catch (error) {
    console.error(`${songMessages.userPreferenceSongsError}: ${error.message}`);
    next(error);
  }
};

export const fetchFeaturedSongs = async (_, response, next) => {
  try {
    const songs = await Song.aggregate([
      { $sample: { size: 4 } },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);
    response.status(statusCode.ok).json({
      success: apiResponses.success,
      message: songMessages.featuredSongs,
      featuredSongs: songs,
    });
  } catch (error) {
    console.error(` ${songMessages.featuredSongsError} :${error.message}`);
    next(error);
  }
};
