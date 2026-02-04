import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import {
  fetchAllSongs,
  fetchFeaturedSongs,
  fetchTrendingSongs,
  fetchUserPreferenceSongs,
} from "../../controller/song/song.controller.js";
import {
  protectRoute,
  requireAdmin,
} from "../../middleware/auth/auth.middleware.js";

const { song } = API;
const {
  FETCH_ALL_SONGS,
  FETCH_FEATURED_SONGS,
  FETCH_USER_PREFERENCE_SONGS,
  FETCH_TRENDING_SONGS,
} = song;

const router = express.Router();

router.get(FETCH_ALL_SONGS, protectRoute, requireAdmin, fetchAllSongs);
router.get(FETCH_FEATURED_SONGS, fetchFeaturedSongs);
router.get(FETCH_USER_PREFERENCE_SONGS, fetchUserPreferenceSongs);
router.get(FETCH_TRENDING_SONGS, fetchTrendingSongs);

export default router;
