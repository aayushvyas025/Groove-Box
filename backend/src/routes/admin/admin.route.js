import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import {
  checkAdmin,
  createAlbum,
  createSongs,
  deleteSongs,
} from "../../controller/admin/admin.controller.js";
import {
  protectRoute,
  requireAdmin,
} from "../../middleware/auth/auth.middleware.js";

const { admin, song, album } = API;
const { CHECK_ADMIN } = admin;
const { CREATE_SONG, DELETE_SONG } = song;
const {CREATE_ALBUM, DELETE_ALBUM} = album; 

const router = express.Router();

router.get(CHECK_ADMIN, protectRoute, requireAdmin, checkAdmin);
router.post(CREATE_SONG, protectRoute, requireAdmin, createSongs);
router.delete(DELETE_SONG, protectRoute,requireAdmin,deleteSongs);
router.post(CREATE_ALBUM, protectRoute, requireAdmin,createAlbum);


export default router;
