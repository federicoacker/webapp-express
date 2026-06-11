import connection from "../data/db.js";
import addReview from "../data/queries/addReview.js";
import getReviewBySlug from "../data/queries/getReviewBySlug.js";

import reviewSelectAllForProduct from "../data/queries/reviewSelectAllForProduct.js";
import deleteReview from "../data/queries/deleteReview.js";
import updateReview from "../data/queries/updateReview.js";


const reviewController = {
    index,
    show,
    store,
    modify,
    destroy
}

async function index(request, response) {
    const slug = request.productSlug // Mi aspetto che ci sia un middleware che valida le slug e me le salva in questo campo.
    const {result, error} = await reviewSelectAllForProduct(slug);
    if (error === 500) {
        return response.status(500).json({
            error: "C'è stato un errore nel fetchare le review per questo prodotto",
            result: null
        })
    }
    if (error === 404){
        return response.status(404).json({
            error: "Non sono state trovate review per questo prodotto",
            result: null
        });
    }

    response.json({
        error: null,
        result
    });
}

async function show(request, response) {
    const foundReview = request.foundReview;
    return response.json({
        error: null,
        result: foundReview
    });
}

async function store(request, response) {
    const {result: reviewId, error} = await addReview(request);
    if (error) {
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

async function modify(request, response) {
    const slug = request.reviewSlug;
    const reviewToUpdate = request.validatedReview;//mi aspetto un middleware che valida i dati
    try {
        const {result, error} = await updateReview(slug, reviewToUpdate);

        if(error === 500){
            return response.status(500).json({
                error:"C'è stato un errore nell'update della review",
                result: null
            });
        }
        
        for(let i=0; i<result.length; i++){
            if (result[i].affectedRows === 0) {
                return response.status(404)
                    .json({
                        error: "review non trovata",
                        result: null
                    });
            }
        }

        response.json({
            error: null,
            result: result
        });

    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: "Errore nell'update della review",
            result: null
        });
    }
}

async function destroy(request, response) {
    const {error, result} = await deleteReview(request);
    if(error === 404){
        return response.status(404).json({
            error: "Non è stata trovata la review",
            result: null
        });
    }
    if(error === 500){
        return response.status(500).json({
            error: "C'è stato un problema nella delete",
            result: null
        });
    }

    response.sendStatus(204);
}

export default reviewController;