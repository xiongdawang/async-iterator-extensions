export function skipWhile(predicate) {
    return async function* inner(source) {
        let skipping = false;
        for await (const item of source) {
            if (skipping || !predicate(item)) {
                skipping = true;
                yield item;
            }
        }
    };
}
