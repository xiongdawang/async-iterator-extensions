
export async function* of (...values) {
    for (const item of values) {
        yield item;
    }
}
