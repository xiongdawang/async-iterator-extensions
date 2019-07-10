export function take(numberToTake) {
    return async function* inner(source) {
        let index = 0;
        for await (const item of source) {
            if (index++ >= numberToTake) {
                break;
            }
            yield item;
        }
    };
}
