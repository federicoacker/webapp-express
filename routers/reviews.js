import { Router } from "express";
import express from "express";
import reviewController from "../controllers/reviews.js";
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";
import { checkReviewSlugExists } from "../middlewares/checkReviewSlugExists.js";

const reviewRouter = express.Router();

reviewRouter.use(express.json());

reviewRouter.get("/", reviewController.index);

reviewRouter.get("/:reviewSlug", [checkReviewSlugExists, reviewController.show]);

reviewRouter.post("/", reviewController.store);

reviewRouter.patch("/:slug", reviewController.modify);

reviewRouter.delete("/:slug", reviewController.destroy);

export default reviewRouter;