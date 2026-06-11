import connection from "../db.js"

async function getCategoryBySlug(slug) {
    const querySelect = `
    SELECT slug, label, description, image
    FROM categories
    WHERE slug = ?
    LIMIT 1
    `;

    try {
        const [result] = await connection.execute(querySelect, [slug]);
        if(result.length === 0){
            return {result:null, error:404};
        }
        return {result:result[0], error:null};
    } catch (error) {
        console.error(error);
        return { result: null, error: 500 };
    }
}
export default getCategoryBySlug