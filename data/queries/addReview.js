import connection from "../db.js";

async function addReview(request) {
    const reviewToAdd = request.validatedReview;
    const {product_id, slug, title, description, vote} = reviewToAdd
    const addQuery = `
    INSERT INTO reviews (product_id, slug, title, description, vote, date)
    VALUES (?, ?, ?, ?, ?, NOW());
    `;
    const results = await connection.execute(addQuery, [product_id, slug, title, description, vote]);
    return results[0].insertId;
}

export default addReview;