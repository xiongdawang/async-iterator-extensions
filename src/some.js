export function some(predicate = () => true) {
    return async function inner(source) {
        for await (const item of source) {
            if (predicate(item)) {
                return true;
            }
        }
        return false;
    };
}
