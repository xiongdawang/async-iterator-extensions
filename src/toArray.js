export async function toArray(source) {
    const result = [];
    for await (const item of source) {
        result.push(item);
    }
    return result;
}
