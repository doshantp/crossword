import express from "express";
import { order } from "../controllers/order.controller.js";
import { ordersfetch } from "../controllers/order.controller.js";
import { removeorderitems } from "../controllers/cart.controller.js";
const router = express.Router();

router.post("/order", order);
router.post("/ordersfetch", ordersfetch);
router.delete('/removeorderitems/:Email', removeorderitems)

export default router;
