import { Router } from "express";
import express from "express";
import productController from '../controllers/products.js'

const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get("/", productController.index)

productRouter.get("/", productController.show)

productRouter.delete("/", productController.delete)

export default productRouter;