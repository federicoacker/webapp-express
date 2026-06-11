import connection from "../db.js"

async function getProductBySlug(slug) {
    const querySelect = `
    SELECT name, description, price, image, slug
    FROM products
    WHERE slug = ?;
    `;

    try {
        const [result] = await connection.execute(querySelect, [slug]);
        result[0].price=(parseFloat(result[0].price));
        return result;
    } catch (error) {
        return null;
    }
}
export default getProductBySlug