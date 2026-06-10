import { Router } from "express";
import express from "express";
import reviewController from "../controllers/reviews.js";
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";
import { checkReviewSlugExists } from "../middlewares/checkReviewSlugExists.js";
import { validateReviewPayload } from "../middlewares/validateReviewPayload.js";
import { validateUpdateReviewPayload } from "../middlewares/validateUpdateReviewPayload.js";

const reviewRouter = express.Router();

reviewRouter.use(express.json());

reviewRouter.get("/", reviewController.index);

reviewRouter.get("/:reviewSlug", [checkReviewSlugExists, reviewController.show]);

reviewRouter.post("/", [validateReviewPayload, reviewController.store]);

reviewRouter.patch("/:reviewSlug", [checkReviewSlugExists, validateUpdateReviewPayload, reviewController.modify]);

reviewRouter.delete("/:reviewSlug", [checkReviewSlugExists, reviewController.destroy]);

export default reviewRouter;