import connection from "../db.js"

function deleteProducts(slug) {

    const deleteQuery = `
    DELETE FROM products WHERE slug = ?
    `;

    try {
        const results = await connection.execute(deleteQuery, [slug]);
        return results;
    }
    catch (error) {
        return null;
    }
}
export default deleteProducts