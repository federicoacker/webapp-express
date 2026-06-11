import connection from "../db.js";

async function reviewSelectAllForProduct(slug){
    const querySelect = `
    SELECT r.slug, r.title, r.description, r.vote, r.likes, r.created_at
    FROM reviews as r
    JOIN products as p
    ON p.id = r.product_id
    WHERE p.slug = ?;
    `;

    try{
        const results = await connection.execute(querySelect, [slug]);
        if(results[0].length === 0){
            return {result:null, error:404};
        }
        return {result:results[0], error:null};
    }
    catch (error){
        return {result:null, error:500};
    }
}

export default reviewSelectAllForProduct;