import express from "express"; 
import { API } from "../../helper/constants/apiRoutes.js"; 
import userRoutes from "../../routes/user/user.routes.js";
import albumRoutes from "../../routes/album/album.routes.js"


const {user, song} = API; 

export const parseJson = (app) => {
 app.use(express.json())
} 

export const middlewareRoutes = {
  userRoutes:(app) => app.use(user.BASE_URL,userRoutes), 
  songRoutes:(app) => app.use(song.BASE_URL,albumRoutes),

}