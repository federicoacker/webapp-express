import connection from "../db.js"

function deleteProducts() {
    const 

    const deleteQuery = `
    DELETE FROM products WHERE slug = ?
    `;

    try {
        const result = await connection.execute(deleteQuery, [reviewSlug]);
        return { error: null, result: result };
    }
    catch (error) {
        return { error: 500, result: null };
    }
}
export default deleteProducts