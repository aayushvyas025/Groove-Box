import express from "express" 
import { API } from "../../helper/constants/apiRoutes.js";
import { authCallback } from "../../controller/auth/auth.controller.js";


const {auth} = API;
const {CLERK_AUTH_CALLBACK} = auth; 

const router = express.Router(); 

router.post(CLERK_AUTH_CALLBACK, authCallback);


export default router; 

