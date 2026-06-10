import connection from "../db.js";


async function updateReview(slug, reviewToUpdate) {
    const { title, description, vote, likes } = reviewToUpdate;
    let result = [];
    if(title){
        const updateQuery = `
        UPDATE reviews
        SET title = ?
        WHERE slug = ?;
        `;
        try{

            result.push(await connection.execute(updateQuery, [title, slug]));
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

            result.push(await connection.execute(updateQuery, [description, slug]));
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
            result.push(await connection.execute(updateQuery, [vote, slug]));
        }catch(error){
            return {error:500, result:null};
        }
    }

    if(likes){
        const updateQuery = `
        UPDATE reviews
        SET likes = ?
        WHERE slug = ?;
        `;
        try{
            const result = await connection.execute(updateQuery, [likes, slug]);
        }catch(error){
            return {error:500, result:null};
        }
    }
    return {error:null, result};
}
export default updateReview