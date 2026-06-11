import connection from "../db.js";

async function getReviewBySlug(slug) {
    const querySelect = `
    SELECT title, description, vote, likes, created_at, slug FROM reviews WHERE slug = ?
    `
    try {
        const [reviewRows] = await connection.execute(querySelect,[slug]);

        if (reviewRows.length === 0) {
            return { result: null, error: 404 };
        }

        return {result: reviewRows, error:null};

    } catch (error) {
        console.error(error);
        return { result: null, error: 500 };
    }
}

export default getReviewBySlug;