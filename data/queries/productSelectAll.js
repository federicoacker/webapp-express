import connection from "../db.js"

async function productSelectAll() {
    const querySelectProducts = `
    SELECT name, description, price, image, slug, id
    FROM products
    `;
    const querySelectCategories = `
    SELECT label, category_product.product_id, category_product.category_id
    FROM categories
    JOIN category_product
    ON categories.id = category_product.category_id
    `;

    try {
        const [products] = await connection.execute(querySelectProducts);
        const [categories] = await connection.execute(querySelectCategories);

        for (const product of products){
            product.categories = [];
        }

        for(const category of categories){
            const connectedProduct = products.find(product => product.id === category.product_id);
            if(connectedProduct){
                connectedProduct.categories.push(category);
            }
        }
        const mappedProducts = products.map(product=> {
            return {
                ...product,
                price: parseFloat(product.price)
            }
        })

        return mappedProducts;

    } catch (error) {
        return null;
    }
}
export default productSelectAll