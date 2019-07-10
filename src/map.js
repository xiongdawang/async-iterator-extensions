export function map(mapper) {
    return async function* inner(source) {
        let index = 0;
        for await (const item of source) {
            yield await mapper(item, index++);
        }
    }
}
