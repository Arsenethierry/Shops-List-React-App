import mongoose from "mongoose";
import express from 'express';
import ShopModel from "../models/shops.js";

const router = express.Router();

export const getShops = async (req, res) => { 
    try {
        const shopList = await ShopModel.find();
                
        res.status(200).json(shopList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createShop = async (req, res) => {
    const { name, owner, area,categories,selectedFile } = req.body;

    const newShop = new ShopModel({ name, owner, area,categories,selectedFile });

    try {
        await newShop.save();

        res.status(201).json(newShop );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;