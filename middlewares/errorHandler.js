export function errorHandler(error, request, response, next){
    if( error.code === "ER_DUP_ENTRY") {
        return response.status(409).json({
            error: "Elemento già presente",
            result: null
        });
    }

    if(error.code === "ER_NO_REFERENCED_ROW_2") {
        return response.status(400).json({
            error: "Riferimento non valido",
            result: null
        });
    }

    const status = error.status || 500;
    const message = error.massage || "Errore interno del server";

    if (status >= 500) {
        console.error(error);
    }

    return response.status(status).json({
        error: "error",
        result: null
    })
}