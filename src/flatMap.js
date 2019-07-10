export function flatMap(mapper) {
    return async function* inner(source) {
        for await (const item of source) {
            for await (const nestedItem of mapper(item)) {
                yield nestedItem;
            }
        }
    };
}
