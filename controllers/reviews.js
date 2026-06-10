import connection from "../data/db.js";
import addReview from "../data/queries/addReview.js";
import reviewSelectAll from "../data/queries/reviewSelectAllForProduct.js";

const reviewController = {
    index,
    show,
    store,
    modify,
    destroy
}

async function index (request, response) {
    const slug = request.productSlug // Mi aspetto che ci sia un middleware che valida le slug e me le salva in questo campo.
    const results = await reviewSelectAllForProduct(productSlug);
    if(!results){
        return response.status(500).json({
            error: "",
            result: null
        })
    }

    response.json({
        error: null,
        result: results
    });
}

async function show(request, response) {
    const slug = request.params.reviewSlug;
    console.log(slug);
    try {
        const [productRows] = await connection.execute(
            'SELECT title, description, vote, likes, date FROM reviews WHERE slug = ?',
            [slug]
        );

        if (productRows.length === 0) {
            return response.status(404)
                .json({
                    error: 'prodotto non trovato',
                    result: null
                });
        }

        response.json({
            error: null,
            result: productRows
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

async function store(request, response) {
    const reviewId = await addReview(request);
    if(!reviewId){
        return response.status(500).json({
            error: "C'è stato un errore nell'inserimento della review",
            result: null
        });
    }
    response.status(201).json({
        error:null,
        result: reviewId
    });

}

function modify(request, response) {

}

function destroy (request, response){

}

export default reviewController;