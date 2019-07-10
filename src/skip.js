export function skip(numberToSkip) {
    return async function* inner(source) {
        let count = 0;
        for await (const item of source) {
            if (count++ > numberToSkip) {
                yield item;
            }
        }
    };
}
