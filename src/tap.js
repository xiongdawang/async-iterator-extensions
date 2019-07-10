export function tap(func) {
    return async function* inner(source) {
        for await (const item of source) {
            func(item);
            yield item;
        }
    };
}
