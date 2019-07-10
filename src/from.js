export async function * from(values) {
    for (const item of values) {
        yield item;
    }
}
