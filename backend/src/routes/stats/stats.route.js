import express from "express"
import { API } from "../../helper/constants/apiRoutes.js";
import { protectRoute, requireAdmin } from "../../middleware/auth/auth.middleware.js";
import { fetchAllStatistics } from "../../controller/stats/stats.controller.js";

const {stats} = API;
const {FETCH_STATS} = stats;
const router = express.Router(); 

router.get(FETCH_STATS, protectRoute, requireAdmin, fetchAllStatistics);

export default router; 

