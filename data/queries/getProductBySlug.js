import connection from "../db.js"

async function getProductBySlug() {
    const querySelect = `
    SELECT name, description, price, image
    FROM products
    WHERE slug = ?;
    `;

    try {
        const results = await connection.execute(querySelect, [slug])
        return results;
    } catch (error) {
        return null;
    }
}
export default getProductBySlug