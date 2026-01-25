import express from "express";
import { connectionWithDB } from "./src/helper/utils/connectionWithDB.js";
import { middlewareRoutes, parseJson } from "./src/middleware/common/common.middleware.js";

const {userRoute, albumRoute, songRoute, adminRoute, authRoute, statsRoute} = middlewareRoutes; 


const app = express();

parseJson(app);
userRoute(app); 
albumRoute(app); 
songRoute(app);
adminRoute(app);
authRoute(app);
statsRoute(app); 



connectionWithDB(app);
