import connection from "../db.js";

async function deleteReview (request) {
    const reviewSlug = request.reviewSlug;
    const foundReview = request.foundReview;
    
    if(!foundReview){
        return {error:404, result: null}; 
    }

    const deleteQuery = `
    DELETE FROM reviews WHERE slug = ?
    `
    try{
        const result = await connection.execute(deleteQuery, [reviewSlug]);
        return {error:null, result:result[0]};
    }
    catch(error){
        return {error:500, result:null};
    }

}

export default deleteReview;