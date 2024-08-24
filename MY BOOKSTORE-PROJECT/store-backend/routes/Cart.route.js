import express from "express";
import { cart } from "../controllers/cart.controller.js";
import { cartfetch } from "../controllers/cart.controller.js";
import { removecart } from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/cart", cart);
router.post("/cartfetch", cartfetch);
router.delete("/removecart/:Email/:title", removecart);

export default router;
