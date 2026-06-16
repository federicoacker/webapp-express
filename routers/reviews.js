import { Router } from "express";
import express from "express";
import reviewController from "../controllers/reviews.js";
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";
import { checkReviewSlugExists } from "../middlewares/checkReviewSlugExists.js";
import { validateReviewPayload } from "../middlewares/validateReviewPayload.js";
import uploadMiddleWare from "../middlewares/uploadMiddleware.js";

const reviewRouter = express.Router();

reviewRouter.get("/", reviewController.index);

reviewRouter.get("/:reviewSlug", [checkReviewSlugExists, reviewController.show]);

reviewRouter.post("/", [uploadMiddleWare, validateReviewPayload, reviewController.store ]);

reviewRouter.patch("/:reviewSlug", [checkReviewSlugExists, validateReviewPayload, reviewController.modify]);

reviewRouter.delete("/:reviewSlug", [checkReviewSlugExists, reviewController.destroy]);

export default reviewRouter;