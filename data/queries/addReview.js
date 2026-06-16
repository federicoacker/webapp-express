import connection from "../db.js";
import createSlug from "../../utils_js/createSlug.js";

async function addReview(request) {
    const {title, description, vote, image} = request.validatedReview
    const productId = request.productId;
    const slug = await createSlug(title);
    if(!slug){
        return {error:500, result:null}
    }
    try{
        const addQuery = `
        INSERT INTO reviews (product_id, slug, title, description, vote, created_at, image)
        VALUES (?, ?, ?, ?, ?, NOW(), ?);
        `;
        const results = await connection.execute(addQuery, [productId, slug, title, description, vote, image]);
        return {result:results[0].insertId, error:null};
    }
    catch(error){
        return {result:null, error:500};
    }
}

export default addReview;