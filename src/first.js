export function first(predicate) {
    predicate = predicate || (() => true);
    return async function* innerHeight(source) {
        for await (const item of source) {
            if (predicate(item)) {
                yield item;
                break;
            }
        }
    };
}
