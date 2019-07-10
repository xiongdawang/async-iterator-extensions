export async function sum(source) {
    let total = 0;
    for await (const item of source) {
        total += item;
    }
    return total;
}
