export async function* iteratorToIterable(iterator) {
    while (true) {
        const next = await iterator.next();
        if (next.done) { return; }
        yield next.value;
    }
}
