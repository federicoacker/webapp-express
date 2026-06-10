import { Router } from "express";
import express from "express";
import productController from '../controllers/products.js'

const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get("/", productController.index);

productRouter.get("/:productSlug", productController.show);

productRouter.delete("/:productSlug", productController.destroy);

export default productRouter;