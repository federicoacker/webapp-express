import { validateString } from "./validateString.js";
import { validateNumber } from "./validateNumber.js";
import categoriesSelectAll from "../../data/queries/categoriesSelectAll.js";

async function validateQuery(queryObject) {

    const keys = Object.getOwnPropertyNames(queryObject);
    if (keys.length === 0) {
        return { result: {}, errors: [] };
    }
    const acceptedOrderBys = ["created_at", "updated_at", "name", "categoryslug"];
    const acceptedOrders = ["asc", "desc"];
    const { result, error } = await categoriesSelectAll();
    if (error) {
        return { result: {}, errors: ["C'è stato un problema nel fetch delle categorie"] };
    }
    const acceptedCategories = result.map(category => category.label.toLowerCase());
    let errors = [];

    let validatedOrderBy;
    let validatedOrder;
    let validatedOffset;
    let validatedCategory;
    let validatedSearch;
    let validatedLimit;

    for (const key of keys) {
        switch (key) {
            case "orderBy":
                validatedOrderBy = validateString(queryObject["orderBy"]);
                if (!validatedOrderBy || !acceptedOrderBys.includes(validatedOrderBy.toLowerCase())) {
                    errors.push("Il valore inserito in orderBy è errato");
                }
                break;
            case "order":
                validatedOrder = validateString(queryObject["order"]);
                if (!validatedOrder || !acceptedOrders.includes(validatedOrder.toLowerCase())) {
                    errors.push("Il valore inserito in order è errato");
                }
                break;
            case "offset":
                validatedOffset = validateNumber(parseInt(queryObject["offset"]));
                if (validatedOffset === null) {
                    errors.push(`Il valore inserito in offset è errato: ${validatedOffset}`);
                }
                break;
            case "category":
                validatedCategory = validateString(queryObject["category"].toLowerCase());
                if (!validatedCategory || !acceptedCategories.includes(validatedCategory)) {
                    errors.push("Il valore inserito in category è errato");
                }
                break;
            case "search":
                validatedSearch = validateString(queryObject["search"].toLowerCase())
                if (!validatedSearch) {
                    errors.push("Il valore inserito nella search è errato");
                }
                break;
            case "limit":
                validatedLimit = validateNumber(parseInt(queryObject["limit"]));
                if(!validatedLimit || validatedLimit > 10){
                    errors.push("Il valore di limit non è valido, deve essere un numero e al massimo 10");
                }
                break;

            default:
                errors.push(`La chiave ${key} non è un parametro di query accettato`);
                break;
        }
    }


    const validatedQueryObject = {
        validatedOrderBy,
        validatedOrder,
        validatedOffset,
        validatedCategory,
        validatedSearch,
        validatedLimit
    }

    if (errors.length > 0) {
        return { result: null, errors };
    }

    return { result: validatedQueryObject, errors: [] };
}

export default validateQuery;