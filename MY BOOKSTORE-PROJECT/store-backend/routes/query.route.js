import express from "express";
import { query } from "../controllers/query.controller.js";

const router = express.Router();

router.post("/query", query);

export default router;
