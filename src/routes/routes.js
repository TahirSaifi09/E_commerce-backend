import { Router } from "express";
import { AddProduct, ProductController } from "../controller/controller.js";

async function loggingMiddleWare(req, res, next) {
  console.log("hello");
  next();
}

export const ProductRoute = Router();

ProductRoute.route("/ab").post(AddProduct);

ProductRoute.get("/abc", loggingMiddleWare, ProductController);
