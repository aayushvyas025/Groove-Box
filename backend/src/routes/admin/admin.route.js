import express from "express"
import { API } from "../../helper/constants/apiRoutes.js";
import { checkAdmin } from "../../controller/admin/admin.controller.js";

const {admin} = API; 
const {CHECK_ADMIN} = admin;

const router = express.Router(); 

router.get(CHECK_ADMIN, checkAdmin)

export default router; 
