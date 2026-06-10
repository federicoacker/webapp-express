
const validFields = new Set(
    ["title", "description", "vote", "likes","product_id"]
);

function switchValidator(key, reviewPayload){
    let errors = [];
    let result;
    switch(key){
        case "title":
            result = validateString(reviewPayload[key]);
            if(!result){
                errors.push("Il titolo non è valido");
            }
            break;
        case "vote":
            result = validateNumber(reviewPayload[key]);
            if(!result || result < 0 || result > 5){
                errors.push("Il voto inserito non è valido");
            }
            break;
        case "likes":
            result = validateString(reviewPayload[key]);
            if(!result || result < 0){
                errors.push("I likes inseriti non sono validi");
            }
            break;
        case "description":
            // nessuna validazione necessaria, puoi fare quello che ti pare
            break;
        default:
            break;
    }

    return errors;
}

function validateReview(reviewPayload, isPatch = true){

    const fieldsReceived = new Set(Object.keys(reviewPayload));
    // Vediamo prima se le fields ricevute sono contenute tra le mie valid fields (per la patch) 
    // o contengono almeno tutte le validFields (per la create)
    const isValidFields = isPatch ? fieldsReceived.isSubsetOf(validFields) : fieldsReceived.isSupersetOf(validFields);
    // Vediamo se ci sono fields diverse (per la create e per la patch)
    const extraFields = fieldsReceived.difference(validFields);
    // Vediamo se ci sono fields mancanti (per la create);
    const missingFields = isPatch ? [] : validFields.difference(fieldsReceived);


    let errors = [];
    for(const key of Object.keys(reviewPayload)){
        errors = switchValidator(key, reviewPayload);
    }
}