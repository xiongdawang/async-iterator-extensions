export function pluck(...path) {
    return async function* inner(source) {
        for await (const item of source) {
            let value = item;
            for (const key of path) {
                if (value[key] === undefined) {
                    value = undefined;
                    break;
                }
                value = value[key];
            }
            yield value;
        }
    };
}
