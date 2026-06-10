import { validateNumber } from "../utils_js/validation/validateNumber.js";
import { validateString } from "../utils_js/validation/validateString.js";

export function validateReviewPayload(request, response, next){
    const reviewPayload = request.body;
    const {title, vote} = reviewPayload;

    //title: obbligatorio, stringa non vuota
    const validatedTitle = validateString(title);
    if(!validatedTitle){
        return response.status(400).json({
            error: "Title non valido",
            result: null
        });
    }
    
    //vote: obbligatorio, numero intero tra 0 e 5
    const validatedVote = validateNumber(vote);
    if(!validatedVote || validatedVote < 0 || validatedVote > 5){
        return response.status(400).json({
            error: "Vote non valido",
            result: null
        });
    }

    //normalizzazione
    reviewPayload.title = validatedTitle;
    reviewPayload.vote = validatedVote;
    request.validatedReview = reviewPayload;
    
    next();
}