export function insert(...values) {
    return async function* inner(source) {
        for (const value of values) {
            yield value;
        }
        for await (const item of source) {
            yield item;
        }
    };
}
