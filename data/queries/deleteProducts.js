import connection from "../db.js"

async function deleteProducts(slug) {
    
    const foundProduct = request.product;
    if(!foundProduct){
        return {result:null, error:404};
    }

    const deleteQuery = `
    DELETE FROM products WHERE slug = ?
    `;


    try {
        const result = await connection.execute(deleteQuery, [slug]);
        return {result: result[0], error:null};
    }
    catch (error) {
        return {result:null, error:500};
    }
}
export default deleteProducts