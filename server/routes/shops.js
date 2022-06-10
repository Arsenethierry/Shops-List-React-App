import express from "express";
import { createShop, getShops, updateShop, deleteShop } from "../controllers/shops.js";

const router = express.Router();

router.get("/", getShops );
router.post("/", createShop);
router.patch('/:id', updateShop);
router.delete('/:id', deleteShop);

export default router;
