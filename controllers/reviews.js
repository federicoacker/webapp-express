import connection from "../data/db";

const reviewController = {
    index,
    show,
    store,
    modify,
    destroy
}

function index(request, response) {

}

async function show(request, response) {
    const slug = request.slug
    const results = await reviewSelectAllForProduct(slug);

    if (!results) {
        return response.status(500)
            .json({
                error: "",
                result: null
            })
    }

    try {
        const [productRows] = await connection.execute(
            'SELECT * FROM products WHERE slug = ?',
            [slug]
        );

        if (productRows.length === 0) {
            response.status(404)
                .json({
                    error: 'prodotto non trovato',
                    result: null
                });
        }

        response.json({
            error: null,
            result: productRows[0]
        })

    } catch (error) {
        console.error(error);
        response.status(500)
            .json({
                errore: 'errore del server',
                risultato: null
            });
    }

}

function store(request, response) {

}

function modify(request, response) {

}

function destroy(request, response) {

}

export default reviewController;