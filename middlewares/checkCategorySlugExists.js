import connection from "../data/db.js";
import getCategoryBySlug from "../data/queries/getCategoryBySlug.js";
import { validateSlug } from "../utils_js/validation/validateSlug.js";

export async function checkCategorySlugExists(request, response, next) {

    const validatedSlug = validateSlug(request.params.categorySlug);
    console.log(validatedSlug);
    if (validatedSlug === null) {
        return response.status(400).json({
            error: "Slug non valida",
            result: null
        });
    }
    const { result: rows, error } = await getCategoryBySlug(validatedSlug);

    if (error === 404) {
        return response.status(404).json({
            error: "Category non trovata",
            result: null
        });
    }
    if (error === 500) {
        return response.status(500).json({
            error: "C'è stato un problema nel recuperare i dati dal db",
            result: null
        });
    }
    request.categorySlug = validatedSlug;
    request.foundCategory = rows;
    
    return next();
}