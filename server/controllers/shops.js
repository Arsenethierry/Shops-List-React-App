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
export const updateShop = async (req, res) => {
    const { id } = req.params;
    const { name, owner, area,categories,selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedShop = { name, owner, area,categories,selectedFile, _id: id };

    await ShopModel.findByIdAndUpdate(id, updatedShop, { new: true });

    res.json(updatedShop);
}

export const deleteShop = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ShopModel.findByIdAndRemove(id);

    res.json({ message: "Shop deleted successfully." });
}

export default router;