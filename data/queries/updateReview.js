import connection from "../db";


async function updateReview(slug, reviewToUpdate) {
    const { title, description, vote } = reviewToUpdate;

    /*
    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
    */

    const updateQuery = `
    UPDATE reviews
    SET title = ?, description = ?, vote = ?
    WHERE slug = ?;
    `;

    const result = await connection.execute(updateQuery, [title, description, vote, slug]);

    return result;
}
export default updateReview