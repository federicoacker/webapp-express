import connection from "../data/db.js";

export async function index(request, response, next) {
    try {
        const sql = `
            SELECT id, slug, label, description, image
            FROM categories
            ORDER BY label ASC
        `;

        const[rows] = await connection.query(sql);

        return response.json({
            succes: true,
            data: rows
        });
    } catch (error) {
        return next(error);
    }
}


export async function show(request, response, next) {
    try{
        const slug = request.params.categorySlug;

        const sql = `
            SELECT id, slug, label, description, image
            FROM categories
            WHERE slug = ?
            LIMIT 1
        `;

        const [rows] = await connection.query(sql, [slug]);

        if(!rows.length) {
            return response.status(404).json({
                error: "Categoria non trovata",
                result: null
            });
        }

        return response.json({
            success: true,
            data: rows[0]
        });
    } catch (error) {
        return next(error);
    }
}

const categoriesController = {
    index,
    show
}
export default categoriesController;