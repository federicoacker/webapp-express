import connection from "../data/db.js";
import categoriesSelectAll from "../data/queries/categoriesSelectAll.js";
import getCategoryBySlug from "../data/queries/getCategoryBySlug.js";

export async function index(request, response, next) {
    const {result, error} = await categoriesSelectAll();

    if (error === 500) {
        return response.status(500).json({
            error: "C'è stato un errore nel fetchare le categorie ",
            result: null
        })
    }
    if (error === 404){
        return response.status(404).json({
            error: "Non sono state trovate categorie",
            result: null
        });
    }

    response.json({
        error: null,
        result: result
    });
}


export async function show(request, response, next) {
    const slug = request.categorySlug;
    const result = await getCategoryBySlug(slug);

    if (!result) {
        return response.status(500).json({
            error: 'errore nel recupero della categoria',
            result: null
        })
    }

    if (result.length === 0) {
        return response.status(404).json({
            error: 'prodotto non trovato',
            result: null
        })
    }

    response.json({
        error: null,
        result: result[0]
    });
}

const categoriesController = {
    index,
    show
}
export default categoriesController;