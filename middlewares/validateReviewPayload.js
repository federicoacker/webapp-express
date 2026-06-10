import { error } from "node:console";
import { resourceUsage } from "node:process";

export function validateReviewPayload(request, response, next){
    const {title, vote } = request.body;

    //title: obbligatorio, stringa non vuota
    if(typeof title !== "string" || title.trim().length === 0){
        return response.status(400).json({
            error: "Title non valido",
            result: null
        });
    }

    //vote: obbligatorio, numero intero tra 0 e 5
    const parsedVote = Number(vote);
    if(!Number.isInteger(parsedVote) || parsedVote < 0 || parsedVote > 5 ){
        return response.status(400).json({
            error: "Vote non valido",
            result: null
        });
    }

    //normalizzazione
    request.body.title = title.trim();
    request.body.vote = parsedVote;
    request.validatedReview = request.body;
    
    next();
}