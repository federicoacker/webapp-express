import { Router } from "express";
import express from "express";
import reviewController from "../controllers/reviews.js";

const reviewRouter = express.Router();

reviewRouter.use(express.json());

reviewRouter.get("/", reviewController.index);

reviewRouter.get("/:slug", reviewController.show);

reviewRouter.post("/", reviewController.store);

reviewRouter.patch("/:slug", reviewController.modify);

reviewRouter.delete("/:slug", reviewController.destroy);

export default reviewRouter;