import { serverMessages } from "../../helper/constants/serverMessages.js";
import { Album } from "../../model/album/album.model.js";
import { Song } from "../../model/song/song.model.js";
import { User } from "../../model/user/user.model.js";

const {apiResponses, statusCode, statsMessages} = serverMessages;
const { fetchAllStats, fetchAllStatsError} = statsMessages;

export const fetchAllStatistics = async (request, response, next) => {
  try {
    const stats = await Promise.all({
      totalSongs: await Song.countDocuments(),
      totalAlbums: await Album.countDocuments(),
      totalUsers: await User.countDocuments(),
    });
    response.status(statusCode.ok).json({success:apiResponses.success, message:fetchAllStats, stats});
  } catch (error) {
    console.error(`${fetchAllStatsError} : ${error.message}`);
    next(error);
  }
};
