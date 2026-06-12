import connection from "../db.js"

async function productGetCount(){
    const selectQuery = `
    SELECT COUNT(products.id)
    FROM products
    WHERE 1;
    `

    try{
        const [count] = await connection.execute(selectQuery);
        const countObject = count[0];
        return {result:countObject["COUNT(products.id)"], error: null};
    }
    catch{
        return {result:null, error:500};
    }
}

export default productGetCount;