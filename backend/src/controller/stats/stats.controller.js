import { serverMessages } from "../../helper/constants/serverMessages.js";
import { Album } from "../../model/album/album.model.js";
import { Song } from "../../model/song/song.model.js";
import { User } from "../../model/user/user.model.js";

const { apiResponses, statusCode, statsMessages } = serverMessages;
const { fetchAllStats, fetchAllStatsError } = statsMessages;

export const fetchAllStatistics = async (_, response, next) => {
  try {
    const [totalSongs, totalAlbums, totalUsers, allArtists] = await Promise.all(
      [
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),
        Song.aggregate([
          { $project: { artist: 1 } },
          {
            $unionWith: {
              coll: "albums",
              pipeline: [{ $project: { artist: 1 } }],
            },
          },
          { $match: { artist: { $ne: null } } },
          { $group: { _id: "$artist" } },
          { $count: "count" },
        ]),
      ],
    );
    response.status(statusCode.ok).json({
      success: apiResponses.success,
      message: fetchAllStats,
      stats: {
        totalSongs,
        totalAlbums,
        totalUsers,
        totalArtists: allArtists[0]?.count || 0,
      },
    });
  } catch (error) {
    console.error(`${fetchAllStatsError} : ${error.message}`);
    next(error);
  }
};
