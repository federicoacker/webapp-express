import connection from "../data/db.js";
import deleteProducts from "../data/queries/deleteProducts.js";
import getProductBySlug from "../data/queries/getProductBySlug.js"

const productController = {
    index,
    show,
    destroy
}

async function index(request, response) {
    const result = await productSelectAll();

    if (!result) {
        return response.status(500).json({
            error: "errore nel recupero dei prodotti",
            result: null
        });
    }

    response.json({
        error: null,
        result: results
    });
}

function show(request, response) {
    const slug = request.params.productSlug;
    const results = await getProductBySlug(slug);

    if (!results) {
        return response.status(500).json({
            error: 'errore nel recupero del prodotto',
            result: null
        })
    }

    if (results.length === 0) {
        return response.status(404).json({
            error: 'prodotto non trovato',
            result: null
        })
    }

    response.json({
        error: null,
        result: results[0]
    });

}

function destroy(request, response) {
    const slug = request.params.productSlug;
    const results = await deleteProducts(slug);

    if (!results) {
        return response.status(500).json({
            error: "errore nell'eliminazione del prodotto",
            result: null
        })
    }

    if (results.affectedRows === 0) {
        return response.status(404).json({
            error: "prodotto non trovato",
            result: null
        })
    }

    response.json({
        error: null,
        result: results
    });
}

export default productController;