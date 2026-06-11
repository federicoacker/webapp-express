import connection from "../db.js";

async function categoriesSelectAll(){
    const querySelect = `
    SELECT slug, label, description, image
    FROM categories;
    `;
    try{
        const results = await connection.execute(querySelect);
        console.log(results);
        if(results[0].length === 0){
            return {result:null, error:404};
        }
        return {result:results[0], error:null};
    }
    catch (error){
        return {result:null, error:500};
    }
}

export default categoriesSelectAll;