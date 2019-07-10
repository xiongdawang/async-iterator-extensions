export function last(predicate, defaultValue) {
    predicate = predicate || (() => true);
    return async function* inner(source) {
        let lastItem = defaultValue;
        for await (const item of source) {
            if (predicate(item)) {
                lastItem = item;
            }
        }

        if (lastItem) {
            yield lastItem;
        }
    };
}
