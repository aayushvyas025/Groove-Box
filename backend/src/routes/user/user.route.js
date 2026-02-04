import express from "express"; 
import { API } from "../../helper/constants/apiRoutes.js";
import { protectRoute, requireAdmin } from "../../middleware/auth/auth.middleware.js";

const {user} = API; 
const {FETCH_USERS } = user; 

const router = express.Router(); 

router.get(FETCH_USERS, protectRoute,requireAdmin, fetchAllUsers)

export default  router; 