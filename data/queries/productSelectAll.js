import connection from "../db.js"

async function productSelectAll() {
    const querySelectProducts = `
    SELECT name, description, price, image, slug, id, updated_at
    FROM products
    ORDER BY updated_at
    `;
    const querySelectCategories = `
    SELECT categories.label, categories.slug, category_product.product_id, category_product.category_id
    FROM categories
    JOIN category_product
    ON categories.id = category_product.category_id
    `;

    try {
        const [products] = await connection.execute(querySelectProducts);
        const [categories] = await connection.execute(querySelectCategories);

        if(products.length === 0){
            return {result:null, error:404};
        }
        if(categories.length === 0){
            return {result:null, error:500};
        }

        for (const product of products){
            product.categories = [];
        }

        for(const category of categories){
            const connectedProduct = products.find(product => product.id === category.product_id);
            if(connectedProduct){
                connectedProduct.categories.push({label:category.label, slug:category.slug});
            }
        }
        const mappedProducts = products.map(product=> {
            return {
                name: product.name,
                description: product.description,
                image: process.env.PRODUCT_STATIC_PATH + product.image,
                slug: product.slug,
                price: parseFloat(product.price),
                categories: product.categories,
                updated_at: product.updated_at
            };
        })

        return {result:mappedProducts, error:null};

    } catch (error) {
        return{result:null, error:500};
    }
}
export default productSelectAll