import { Router } from "express";
import express from "express";
import productController from '../controllers/products.js'
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";

const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get("/", productController.index);

productRouter.get("/:productSlug", [checkProductSlugExists, productController.show]);

productRouter.delete("/:productSlug",  [checkProductSlugExists, productController.destroy]);

export default productRouter;