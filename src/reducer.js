export function reduce(reducer = (accumulator, next) => {}, init) {
    return async function inner(source) {
        let accumulator = await init;
        for await (const next of source) {
            accumulator = await reducer(accumulator, next);
        }
        return accumulator;
    };
}
