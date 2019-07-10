export async function* flatten(source) {
    for await (const child of source) {
        for await (const item of child) {
            yield item;
        }
    }
}
