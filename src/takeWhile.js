export function takeWhile(predicate) {
    return async function* inner(source) {
        for await (const item of source) {
            if (!predicate(item)) {
                break;
            }
            yield item;
        }
    };
}
