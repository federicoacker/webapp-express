import connection from "../data/db.js";
import addReview from "../data/queries/addReview.js";
import getReviewBySlug from "../data/queries/getReviewBySlug.js";
import reviewSelectAllForProduct from "../data/queries/reviewSelectAllForProduct.js";

const reviewController = {
    index,
    show,
    store,
    modify,
    destroy
}

async function index(request, response) {
    const slug = request.productSlug // Mi aspetto che ci sia un middleware che valida le slug e me le salva in questo campo.
    const results = await reviewSelectAllForProduct(slug);
    if (!results) {
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
    const { result: foundReview, error } = await getReviewBySlug(request);
    if (error === 404) {
        return response.status(404).json({
            error: "Review non trovata",
            result: null
        });
    }
    if ( error === 500 ){
        return response.status(500).json({
            error: "C'è stato un problema nel recuperare i dati della review dal db",
            result: null
        });
    }
    return response.json({
        error: null,
        result: foundReview
    });
}

async function store(request, response) {
    const reviewId = await addReview(request);
    if (!reviewId) {
        return response.status(500).json({
            error: "C'è stato un errore nell'inserimento della review",
            result: null
        });
    }
    response.status(201).json({
        error: null,
        result: reviewId
    });

}

function modify(request, response) {

}

function destroy(request, response) {

}

export default reviewController;