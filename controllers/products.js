const productController = {
    index,
    show,
    destroy
}

async function index(request, response) {
    const slug = request.productSlug;
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

}

export default productController;