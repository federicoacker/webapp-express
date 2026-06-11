import connection from "../db.js"

async function getProductBySlug(slug) {
    const querySelect = `
    SELECT name, description, price, image, slug, id
    FROM products
    WHERE slug = ?;
    `;

    const querySelectCategories = `
    SELECT categories.label, categories.slug, category_product.product_id, category_product.category_id
    FROM categories
    JOIN category_product
    ON categories.id = category_product.category_id
    JOIN products
    ON products.id = category_product.product_id
    WHERE products.slug = ? 
    `;

    try {
        const [product] = await connection.execute(querySelect, [slug]);
        const [categories] = await connection.execute(querySelectCategories, [slug]);
        console.log(categories);
        console.log(product);
        if(product.length === 0){
            return {result:null, error:404};
        }
        if(categories.length === 0){
            return {result:null, error:500};
        }

        product[0].categories = [];
        for(const category of categories){
            product[0].categories.push({label:category.label, slug:category.slug});
        }

        const mappedResult = {
            name:product[0].name,
            description:product[0].description,
            price:parseFloat(product[0].price),
            image:product[0].image,
            slug:product[0].slug,
            categories: product[0].categories
        }
        return {result:mappedResult, error:null};
    } catch (error) {
        return {result:null, error:500};
    }
}
export default getProductBySlug