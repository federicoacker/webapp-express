import connection from "../data/db.js";
import productSelectAll from "../data/queries/productSelectAll.js";
import deleteProducts from "../data/queries/deleteProducts.js";
import getProductBySlug from "../data/queries/getProductBySlug.js"

const productController = {
    index,
    show,
    destroy
}

async function index(request, response) {
    const options = request.validatedQuery || {};
    const {result, error} = await productSelectAll(options);

    if(error === 404){
        return response.status(404).json({
            error:"Non sono stati trovati prodotti",
            result:null
        });
    }

    if(error === 500){
        return response.status(500).json({
            error:"C'è stato un problema nel fetch dei prodotti",
            result:null
        });
    }

    response.json({
        error: null,
        result: result
    });
}

async function show(request, response) {
    const slug = request.productSlug;
    const {result, error} = await getProductBySlug(slug);

    if(error === 404){
        return response.status(404).json({
            error:"Prodotto non trovato",
            result:null
        });
    }

    if(error === 500){
        return response.status(500).json({
            error:"C'è stato un error nel fetch del prodotto",
            result:null
        });
    }

    response.json({
        error: null,
        result: result
    });

}

async function destroy(request, response) {

    const {result, error} = await deleteProducts(request);

    if (error === 500) {
        return response.status(500).json({
            error: "errore nell'eliminazione del prodotto",
            result: null
        })
    }

    if (error === 404) {
        return response.status(404).json({
            error: "Prodotto non trovato",
            result: null
        })
    }

    response.sendStatus(204);
}

export default productController;