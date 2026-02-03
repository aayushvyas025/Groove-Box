import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import {
  checkAdmin,
  createAlbum,
  createSongs,
  deleteAlbum,
  deleteSongs,
} from "../../controller/admin/admin.controller.js";
import {
  protectRoute,
  requireAdmin,
} from "../../middleware/auth/auth.middleware.js";

const { admin, song, album } = API;
const { CHECK_ADMIN } = admin;
const { CREATE_SONG, DELETE_SONG } = song;
const { CREATE_ALBUM, DELETE_ALBUM } = album;

const router = express.Router();

router.use(protectRoute, requireAdmin);

router.get(CHECK_ADMIN, checkAdmin);
router.post(CREATE_SONG, createSongs);
router.delete(DELETE_SONG, deleteSongs);
router.post(CREATE_ALBUM, createAlbum);
router.delete(DELETE_ALBUM, deleteAlbum);

export default router;
