import connection from "../data/db.js";
import { validateSlug } from "../utils_js/validation/validateSlug.js";

export async function checkReviewSlugExists(request, response, next) {

    const validatedSlug = validateSlug(request.params.reviewSlug);
    if(validatedSlug === null) {
        return response.status(400).json({
            success: false,
            message: "Slug non valida",
        });
    }

    try {
        const sql = `SELECT title, slug FROM reviews WHERE slug = ? LIMIT 1`;
        const [rows] = await connection.query(sql, [validatedSlug]);
        if(rows.length === 0) {
            return response.status(404).json({
                error: "Prodotto non trovato",
                result: null
            });
        }

        request.reviewSlug = validatedSlug;

        return next();
    } catch(error) {
        return response.status(500).json({
            error: "C'è stato un problema nel recuperare i dati dal db",
            result: null
        });
    }
    
}
