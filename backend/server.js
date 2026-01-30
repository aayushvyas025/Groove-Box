import express from "express";
import { connectionWithDB } from "./src/helper/utils/connectionWithDB.js";
import {
  clerkGlobalMiddleware,
  middlewareRoutes,
  parseJson,
} from "./src/middleware/common/common.middleware.js";
import { serverErrorMiddleware } from "./src/middleware/error/error.middleware.js";

const { userRoute, albumRoute, songRoute, adminRoute, authRoute, statsRoute } =
  middlewareRoutes;

const app = express();

parseJson(app);
clerkGlobalMiddleware(app);
userRoute(app);
albumRoute(app);
songRoute(app);
adminRoute(app);
authRoute(app);
statsRoute(app);


serverErrorMiddleware(app);

connectionWithDB(app);
