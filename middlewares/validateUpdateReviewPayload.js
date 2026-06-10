import { validateNumber } from "../utils_js/validation/validateNumber.js";
import { validateString } from "../utils_js/validation/validateString.js";

export function validateUpdateReviewPayload(request, response, next){
    const reviewPayload = request.body;
    let result;
    for(const key of Object.keys(reviewPayload)){
        if(key === "title"){
            result = validateString(reviewPayload[key]);
        }
        else if(key === "vote"){
            result = validateNumber(reviewPayload[key]);
        }
        if(result === null){
            return response.status(400).json({
                error:`${key} ha ricevuto un valore non valido`,
                result: null
            });
        }
        request.validatedReview = reviewPayload;
    }
    next();
}