import connection from "../db.js";


async function updateReview(slug, reviewToUpdate) {
    const { title, description, vote } = reviewToUpdate;

    if(title){
        const updateQuery = `
        UPDATE reviews
        SET title = ?
        WHERE slug = ?;
        `;
        try{
            console.log(slug);
            console.log(title);
            const result = await connection.execute(updateQuery, [title, slug]);
        }catch(error){
            return {error:500, result:null};
        }
    }

    if(description){
        const updateQuery = `
        UPDATE reviews
        SET description = ?
        WHERE slug = ?;
        `;
        try{
            console.log(description);
            const result = await connection.execute(updateQuery, [description, slug]);
        }catch(error){
            return {error:500, result:null};
        }
    }
    if(vote){
        const updateQuery = `
        UPDATE reviews
        SET vote = ?
        WHERE slug = ?;
        `;
        try{
            console.log(vote);
            const result = await connection.execute(updateQuery, [vote, slug]);
        }catch(error){
            return {error:500, result:null};
        }
    }

    return {error:null, result:"Patch fatta!"};
}
export default updateReview