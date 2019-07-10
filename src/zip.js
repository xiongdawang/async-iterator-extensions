export function zip(first) {
    return async function* inner(second) {
        const iterators = [first, second].map(value => value[Symbol.asyncIterator]());
        while (true) {
            const [firstNext, secondNext] = await Promise.all(
                iterators.map(iterator => iterator.next())
            );
            if (firstNext.done || secondNext.done) {
                return;
            }
            yield [firstNext.value, secondNext.value];
        }
    };
}
