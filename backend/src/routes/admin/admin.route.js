import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import {
  checkAdmin,
  createSongs,
} from "../../controller/admin/admin.controller.js";
import {
  protectRoute,
  requireAdmin,
} from "../../middleware/auth/auth.middleware.js";

const { admin, song } = API;
const { CHECK_ADMIN } = admin;
const { CREATE_SONG, DELETE_SONG } = song;

const router = express.Router();

router.get(CHECK_ADMIN, protectRoute, requireAdmin, checkAdmin);
router.post(CREATE_SONG, protectRoute, requireAdmin, createSongs);
router.delete(DELETE_SONG, protectRoute,requireAdmin,)

export default router;
