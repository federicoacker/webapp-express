export function validateParamIsString(value) {
    if (typeof value !== "string") {
        return null;
    }

    return value;
}