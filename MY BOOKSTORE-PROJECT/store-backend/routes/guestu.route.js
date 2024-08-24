import express from "express";
import { guest } from "../controllers/guestu.controller.js";

const router = express.Router();

router.post("/guest", guest);

export default router;
