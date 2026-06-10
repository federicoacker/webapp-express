import reviewSelectAll from "../data/queries/reviewSelectAllForProduct";

const reviewController = {
    index,
    show,
    store,
    modify,
    destroy
}

async function index (request, response) {
    const slug = request.productSlug // Mi aspetto che ci sia un middleware che valida le slug e me le salva qui.
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

function show (request, response) {

}

function store (request, response) {

}

function modify (request, response) {
    
}

function destroy (request, response){

}

export default reviewController;