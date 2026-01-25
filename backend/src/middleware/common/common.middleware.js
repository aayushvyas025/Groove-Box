import express from "express";
import { API } from "../../helper/constants/apiRoutes.js";
import {
  adminRoutes,
  albumRoutes,
  authRoutes,
  songRoutes,
  statsRoutes,
  userRoutes,
} from "../../routes/index.js";

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
