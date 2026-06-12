import validateQuery from "../utils_js/validation/validateQuery.js";

async function validateProductQueries(request,response,next) {
    const {result : validatedQuery, errors} = await validateQuery(request.query);

    if(errors.length > 0){
        return response.status(400).json({
            result: null,
            errors
        })
    }

    request.validatedQuery = validatedQuery,
    next();
}

export default validateProductQueries;