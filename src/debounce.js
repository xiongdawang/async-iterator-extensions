export function debounce(timer) {
    return async function* inner(source) {
        const sourceIterator = source[Symbol.asyncIterator]();
        let itemPromise = sourceIterator.next();
        let pendingTimerPromise = null;
        let item = await itemPromise;
        let previousItem = item;
        while (!item.done) {
            pendingTimerPromise = pendingTimerPromise || timer(item.value);

            const raceResult = await Promise.race([itemPromise, pendingTimerPromise]);

            if (raceResult && raceResult.hasOwnProperty("value") && raceResult.hasOwnProperty("done")) {
                previousItem = item;
                item = raceResult;
                itemPromise = sourceIterator.next();
            } else {
                yield item.value;
                pendingTimerPromise = null;
                previousItem = item;
                item = await itemPromise;
                itemPromise = sourceIterator.next();
            }
        }

        if (pendingTimerPromise) {
            await pendingTimerPromise;
            yield previousItem.value;
        }
    };
}
