import express from "express";
import { createShop, getShops } from "../controllers/shops.js";

const router = express.Router();

router.get("/", getShops );
router.post("/", createShop);

export default router;
