export function scan(scanner = (accumulator, next) => {}, init) {
    return async function* inner(source) {
        let accumulator = await init;
        for await (const next of source) {
            yield accumulator;
            accumulator = await scanner(accumulator, next);
        }
        yield accumulator;
    };
}
