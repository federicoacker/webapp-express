function badRequest(response, message) {
  return response.status(400).json({
    success: false,
    message,
  });
}

export function validateParamIsString(field, source = "params") {
    return (request, response) => {
        const value = request[source]?.[field];

        if (typeof value !== "string") {
            return badRequest(response, `"${field}" deve essere una stringa`);
        }

        return response.status(200).json();
    }
}