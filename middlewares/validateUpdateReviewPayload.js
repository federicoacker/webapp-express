import { validateNumber } from "../utils_js/validation/validateNumber.js";
import { validateString } from "../utils_js/validation/validateString.js";



export function validateUpdateReviewPayload(request, response, next){
    const reviewPayload = request.body;
    const isPatch = request.method === "PATCH";
    
    if(errors.length !== 0){
        return response.status(500).json({
            errors,
            result:null
        });
    }
    request.validatedReview = reviewPayload;
    next();
}