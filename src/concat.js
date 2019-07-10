export function concat(first) {
    return async function* inner(second) {
        for await (const item of first) {
            yield item;
        }
        for await (const item of second) {
            yield item;
        }
    };
}
