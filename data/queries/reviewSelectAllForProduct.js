import connection from "../db.js";

async function reviewSelectAllForProduct(slug){
    const querySelect = `
    SELECT r.slug, r.title, r.description, r.vote, r.likes, r.date, r.product_id
    FROM reviews as r
    JOIN products as p
    ON p.id = r.product_id
    WHERE p.slug = ?;
    `;

    try{
        const results = await connection.execute(querySelect, [slug]);
    }
    catch (error){
        return null;
    }
    return results[0];
}

export default reviewSelectAllForProduct;