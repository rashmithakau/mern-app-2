import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';

dotenv.config();

//console.log(process.env.MONGO_URL);
//this is how we can use the environment variables in out code  

const app = express();
app.post("/product",(req,res)=>{
    const product = req.body; //user will send this date

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please fill all the fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success: true, product: newProduct});
    } catch (error) {
        re
    }
});

app.use.ge
app.listen(3000, () => {
    connectDB();
    console.log('Server is running on http://localhost:3000');
})
 
//db pwd
//aW6SR1eoEr3hv9wj

// 