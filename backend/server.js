import express from "express";
import { connectionWithDB } from "./src/helper/utils/connectionWithDB.js";



const app = express();

connectionWithDB(app);
