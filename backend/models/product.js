import mongoose from "mongoose";

//create a schema for the product
const productSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    price:{
        type : Number,
        required:true
    },
    image:{
        type : String,
        required:true
    }
},{
    timestamps: true // Automatically manage createdAt and updatedAt fields 
}
);

// Create a model from the schema
const Product = mongoose.model('Product', productSchema); //products collection will be created in the database

export default Product;