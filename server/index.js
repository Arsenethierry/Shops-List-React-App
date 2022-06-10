import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import shopsRoutes from './routes/shops.js'


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/shops', shopsRoutes);
app.get('/',(req,res)=>{
    res.send("Welcome to Shop List app")
})

const PORT = process.env.PORT || 5000;

const MONGODB_URL = "mongodb+srv://ArseneShops:ArseneShops@cluster0.zmhrp.mongodb.net/shops?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error)=> console.log(error));