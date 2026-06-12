import { Router } from "express";
import express from "express";
import productController from '../controllers/products.js'
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";
import validateProductQueries from "../middlewares/validateProductQueries.js";

const productRouter = express.Router();

productRouter.get("/", [validateProductQueries, productController.index]);

productRouter.get("/count", [productController.count]);

productRouter.get("/:productSlug", [checkProductSlugExists, productController.show]);

productRouter.delete("/:productSlug",  [checkProductSlugExists, productController.destroy]);

export default productRouter;