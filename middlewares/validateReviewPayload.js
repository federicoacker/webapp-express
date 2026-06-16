
import validateReview from "../utils_js/validation/validateReview.js";



export function validateReviewPayload(request, response, next){
    const reviewPayload = request.body;
    const reviewFile = request.files["review-image"][0].filename;
    if(!reviewFile){
        return response.status(400).json({
            error:"Errore nell'upload del file",
            result:null
        })
    }
    reviewPayload.image = reviewFile;

    const isPatch = request.method === "PATCH";
    const {result, errors} = validateReview(reviewPayload, isPatch);
    if(errors.length !== 0){
        return response.status(400).json({
            errors,
            result:null
        });
    }
    request.validatedReview = result;
    next();
}