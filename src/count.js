export async function count(source) {
    let total = 0;
    for await (const item of source) {
        total++;
    }
    return total;
}
