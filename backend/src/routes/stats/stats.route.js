import express from "express"
import { API } from "../../helper/constants/apiRoutes.js";
import { protectRoute, requireAdmin } from "../../middleware/auth/auth.middleware";

const {stats} = API;
const {FETCH_STATS} = stats;
const router = express.Router(); 

router.get(FETCH_STATS, protectRoute, requireAdmin, fetchAllStats);

export default router; 

