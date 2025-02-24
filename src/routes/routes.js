import { Router } from "express";
import { ProductController } from "../controller/controller.js";

export const ProductRoute = Router();

ProductRoute.route("/").get(ProductController)
