import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import userRoutes from "../../routes/user/user.route.js";
import albumRoutes from "../../routes/album/album.route.js";
import songRoutes from "../../routes/song/song.route.js";
import adminRoutes from "../../routes/admin/admin.route.js";
import authRoutes from "../../routes/auth/auth.route.js";
import statsRoutes from "../../routes/stats/stats.route.js";

const { user, song, admin, album, auth, stats } = API;

export const parseJson = (app) => {
  app.use(express.json());
};

export const middlewareRoutes = {
  userRoute: (app) => app.use(user.BASE_URL, userRoutes),
  albumRoute: (app) => app.use(album.BASE_URL, albumRoutes),
  songRoute: (app) => app.use(song.BASE_URL, songRoutes),
  adminRoute: (app) => app.use(admin.BASE_URL, adminRoutes),
  authRoute: (app) => app.use(auth.BASE_URL, authRoutes),
  statsRoute: (app) => app.use(stats.BASE_URL, statsRoutes),
};
