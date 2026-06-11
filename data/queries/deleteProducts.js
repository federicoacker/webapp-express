import connection from "../db.js"

async function deleteProducts(request) {

    const foundProduct = request.product;
    const productSlug = request.productSlug;

    if(!foundProduct){
        return {result:null, error:404};
    }

    const deleteQuery = `
    DELETE FROM products WHERE slug = ?
    `;


    try {
        const result = await connection.execute(deleteQuery, [productSlug]);
        return {result: result[0], error:null};
    }
    catch (error) {
        return {result:null, error:500};
    }
}
export default deleteProducts