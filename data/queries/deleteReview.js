import connection from "../db.js";

async function deleteReview (request) {
    const reviewSlug = request.reviewSlug;
    const foundReview = request.foundReview;
    
    if(!foundReview){
        return response.status(404).json({
            error: "Non è stata trovata questa review nel db",
            result: null
        });
    }

    const deleteQuery = `
    DELETE FROM reviews WHERE slug = ?
    `

    const result = await connection.execute(deleteQuery, [reviewSlug]);

    return result[0];
}

export default deleteReview;