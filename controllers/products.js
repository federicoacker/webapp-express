import deleteProducts from "../data/queries/deleteProducts";

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

}

function destroy(request, response) {
    const slug = request.params.productSlug;
    const result = await deleteProducts(slug);

    if (!result) {
        return response.status(500).json({
            error: "...",
            result: null
        })
    }

    if (results.affectedRows === 0) {
        return response.status(404).json({
            error: "...",
            result: null
        })
    }

    response.json({
        error: null,
        result: results
    });
}

export default productController;