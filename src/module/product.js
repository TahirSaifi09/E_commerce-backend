import { model, Schema } from "mongoose";

const productSchema = new Schema({
  sku: String,
  title: String,
  price: Number,
  mrp: Number,
  description: String,
});

export const ProductModel = model("Product", productSchema);
