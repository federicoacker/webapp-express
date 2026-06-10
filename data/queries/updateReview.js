import createSlug from "../../utils_js/createSlug.js";
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
        const updateSlugQuery = `
        UPDATE reviews
        SET slug = ?
        WHERE slug = ?;
        `
        try{
            const titleResult = await connection.execute(updateQuery, [title, slug]);
            result.push(titleResult);
            if(titleResult.changedRows > 0){
                const newSlug = await createSlug(title);
                result.push(await connection.execute(updateSlugQuery, [newSlug, slug]));
            }
        }catch(error){
            return {error:500, result:null};
        }
    }
    console.log(description);
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
            result.push(await connection.execute(updateQuery, [likes, slug]));
        }catch(error){
            return {error:500, result:null};
        }
    }
    return {error:null, result};
}
export default updateReview