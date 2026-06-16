import { validateNumber } from "./validateNumber.js";
import { validateString } from "./validateString.js";

const validFields = new Set(
    ["title", "description", "vote", "likes"]
);

function switchValidator(key, reviewPayload){
    let result;
    switch(key){
        case "title":
            result = validateString(reviewPayload[key]);
            if(!result || reviewPayload[key].length > 254){
                return "Il titolo non è valido";
            }
            break;
        case "vote":
            result = validateNumber(reviewPayload[key]);
            if(!result || result < 0 || result > 5){
                return "Il voto inserito non è valido";
            }
            break;
        case "likes":
            result = validateNumber(reviewPayload[key]);
            if(result === null || result < 0){
                console.log(result);
                return "I likes inseriti non sono validi";
            }
            break;
        case "description":
            result = validateString(reviewPayload[key]);
                if(!result || reviewPayload[key].length > 64500){
                    return "La description inserita non è valida";
                }
            break;
        case "image":
            result = validateString(reviewPayload[key]);
            if(!result || reviewPayload[key].length > 255){
                return "Il link per l'immagine inserita non è valido";
            }
        default:
            break;
    }
}

function validateReview(reviewPayload, isPatch = true){
    
    let errors = [];
    const fieldsReceived = new Set(Object.getOwnPropertyNames(reviewPayload));
    // Vediamo prima se le fields ricevute sono contenute tra le mie valid fields (per la patch) 
    // o contengono almeno tutte le validFields (per la create)
    const isValidFields = isPatch ? fieldsReceived.isSubsetOf(validFields) : fieldsReceived.isSupersetOf(validFields);
    // Vediamo se ci sono fields diverse (per la create e per la patch)
    const extraFields = fieldsReceived.difference(validFields);
    // Vediamo se ci sono fields mancanti (per la create);
    const missingFields = isPatch ? [] : validFields.difference(fieldsReceived);

    if(!isPatch && missingFields.size !== 0){
        errors.push("Mancano delle fields nella review passata al server");
    }
    if(extraFields.size !== 0){
        errors.push("Ci sono fields extra non esistenti nel db per le reviews");
    }
    if(!isValidFields){
        errors.push("Le fields inserite non corrispondono con quelle che si aspetta il db");
    }


    for(const key of Object.getOwnPropertyNames(reviewPayload)){
        const validatorResult = switchValidator(key, reviewPayload);
        if(validatorResult){
            errors.push(validatorResult);
        }
    }

    return {result:reviewPayload, errors};
}

export default validateReview;