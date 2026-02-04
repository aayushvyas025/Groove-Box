import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import { fetchAllSongs } from "../../controller/song/song.controller.js";
import {
  protectRoute,
  requireAdmin,
} from "../../middleware/auth/auth.middleware.js";

const { song } = API;
const { FETCH_ALL_SONGS } = song;

const router = express.Router();

router.get(FETCH_ALL_SONGS, protectRoute, requireAdmin, fetchAllSongs);

export default router;
