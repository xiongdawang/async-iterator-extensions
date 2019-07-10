export function filter(predicate) {
    return async function* inner(source) {
        for await (const item of source) {
            if (predicate(item)) {
                yield await item;
            }
        }
    };
}

