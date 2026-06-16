import { Router } from "express";
import express from "express";
import reviewController from "../controllers/reviews.js";
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";
import { checkReviewSlugExists } from "../middlewares/checkReviewSlugExists.js";
import { validateReviewPayload } from "../middlewares/validateReviewPayload.js";
import multer from "multer";

const reviewRouter = express.Router();
const storage = multer.diskStorage({
    destination: function(request, file, callback){
        callback(null, './public/uploads');
    },
    filename: function(request, file, callback){
        const uniqueDate = Date.now();
        const extension = file.mimetype.split("/")[1];
        callback(null, file.fieldname + "-" + uniqueDate + `.${extension}`);
    }
})
const fileFilter = (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    const acceptedExtensions = ["png", "webp", "jpg", "jpeg"];
    if(!acceptedExtensions.includes(extension)){
        cb(null,false);
    }
    else{
        cb(null,true);
    }
};
const upload = multer({storage: storage, fileFilter:fileFilter});
const uploadMiddleWare = upload.fields([{name: `review-image`, maxCount:1}]);




reviewRouter.post('/test', uploadMiddleWare, upload.single('review-image'))


reviewRouter.use(express.json());
reviewRouter.get("/", reviewController.index);

reviewRouter.get("/:reviewSlug", [checkReviewSlugExists, reviewController.show]);

reviewRouter.post("/", [validateReviewPayload, reviewController.store]);

reviewRouter.patch("/:reviewSlug", [checkReviewSlugExists, validateReviewPayload, reviewController.modify]);

reviewRouter.delete("/:reviewSlug", [checkReviewSlugExists, reviewController.destroy]);

export default reviewRouter;