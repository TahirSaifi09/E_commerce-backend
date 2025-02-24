import {model, Schema} from "mongoose";

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    mrp: Number,
    sku: Number,
    rating: Number,
    description: String,
});

export const ProductModel = model ("Product", productSchema);