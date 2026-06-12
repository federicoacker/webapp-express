import connection from "../db.js"
import incorporateProducts from "../../utils_js/functions/incorporateProducts.js";

async function productSelectAll(options) {
    const { validatedLimit, validatedOrderBy, validatedOrder, validatedOffset, validatedCategory, validatedSearch } = options;
    let where="WHERE 1 ";
    let orderString="";
    let offsetString = "OFFSET 0";
    let limitString = "LIMIT 10";
    if(validatedSearch){
        where += `AND ( p.name LIKE "%${validatedSearch}%" OR p.description LIKE "%${validatedSearch}%" )`;
    }
    if(validatedCategory){
        where += `AND c.slug = "${validatedCategory}"`;
    }
    if(validatedOrderBy && validatedOrder){
        orderString = `ORDER BY ${validatedOrderBy} ${validatedOrder}`;
    }
    if(validatedOffset){
        offsetString = `OFFSET ${validatedOffset}`;
    }
    if(validatedLimit){
        limitString = `LIMIT ${validatedLimit}`;
    }
    const querySelectProducts = `
    SELECT p.name, p.description, p.price, p.image, p.slug, p.id, p.updated_at, p.created_at, c.label as categoryLabel, c.slug as categorySlug
    FROM products p
    JOIN category_product cp
    ON cp.product_id = p.id
    JOIN categories c
    ON cp.category_id = c.id
    ${where}
    ${orderString}
    ${limitString} ${offsetString};
    `;

    try {
        const [products] = await connection.execute(querySelectProducts);
        
        const normalizedProducts = incorporateProducts(products);

        if (products.length === 0) {
            return { result: null, error: 404 };
        }

        return { result: normalizedProducts, error: null };

    } catch (error) {
        return { result: null, error: 500 };
    }
}
export default productSelectAll