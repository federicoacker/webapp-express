export function validateString(value) {
    if (typeof value !== "string") {
        return null;
    }

    return value;
}