export function every(predicate) {
    return async function inner(source) {
        let status = true;
        for await (const item of source) {
            if (!predicate(item)) {
                status = false;
            }
        }
        return status;
    };
}
