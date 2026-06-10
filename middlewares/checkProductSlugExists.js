import connection from "../data/db.js";
import { validateSlug } from "../utils_js/validation/validateSlug.js";

export async function checkProductSlugExists(request, response, next) {
    const validatedSlug = validateSlug(request.params.slug);

    if(validatedSlug === null) {
        return response.status(400).json({
            success: false,
            message: "Slug non valida",
        });
    }

    try {
        const sql = `SELECT id, name, slug FROM products WHERE slug = ? LIMIT 1`;
        const [rows] = await connection.query(sql, [validatedSlug]);

        if(!rows.length) {
            return response.status(404).json({
                success: false,
                message: "Prodotto non trovato",
            });
        }

        request.params.slug = validatedSlug;
        request.product = rows[0];

        return next();
    } catch(error) {
        return next(error);
    }
    
}