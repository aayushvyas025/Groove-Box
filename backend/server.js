import express from "express";
import { connectionWithDB } from "./src/helper/utils/connectionWithDB.js";
import {
  clerkGlobalMiddleware,
  expressFileUpload,
  middlewareRoutes,
  parseJson,
  secureUrlEncoded,
} from "./src/middleware/common/common.middleware.js";
import { serverErrorMiddleware } from "./src/middleware/error/error.middleware.js";

const { userRoute, albumRoute, songRoute, adminRoute, authRoute, statsRoute } =
  middlewareRoutes;

const app = express();

parseJson(app);
clerkGlobalMiddleware(app);
secureUrlEncoded(app);
expressFileUpload(app);
userRoute(app);
albumRoute(app);
songRoute(app);
adminRoute(app);
authRoute(app);
statsRoute(app);


serverErrorMiddleware(app);

connectionWithDB(app);
//todo : Socket.io Implementation left
