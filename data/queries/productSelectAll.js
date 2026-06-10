import connection from "../db.js"

function productSelectAll() {
    const querySelect = `
    SELECT name, description, price, image
    FROM products
    `;

    try {
        const [result] = await connection.execute(querySelect);
        return result;

    } catch (error) {
        return null;
    }
}
export default productSelectAll