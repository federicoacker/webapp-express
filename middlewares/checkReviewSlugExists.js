import connection from "../data/db.js";
import getReviewBySlug from "../data/queries/getReviewBySlug.js";
import { validateSlug } from "../utils_js/validation/validateSlug.js";

export async function checkReviewSlugExists(request, response, next) {

    const validatedSlug = validateSlug(request.params.reviewSlug);
    if (validatedSlug === null) {
        return response.status(400).json({
            error: "Slug non valida",
            result: null
        });
    }
    const { result: rows, error } = await getReviewBySlug(validatedSlug);

    if (error === 404) {
        return response.status(404).json({
            error: "Prodotto non trovato",
            result: null
        });
    }
    if (error === 500) {
        return response.status(500).json({
            error: "C'è stato un problema nel recuperare i dati dal db",
            result: null
        });
    }
    request.reviewSlug = validatedSlug;
    request.foundReview = rows;
    
    return next();
}