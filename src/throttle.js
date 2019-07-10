export function throttle(timer) {
    return async function* inner(source) {
        let pendingTimerPromise = null;
        for await (const item of source) {
            if (!pendingTimerPromise) {
                yield item;
                pendingTimerPromise = timer(item).then(() => {
                    pendingTimerPromise = null;
                });
            }
        }
    };
}
