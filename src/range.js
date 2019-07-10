export async function* range(startOrEnd, end, step = 1) {
    let actualStart;
    let actualEnd;
    if (end === undefined) {
        actualStart = 0;
        actualEnd = startOrEnd;
    } else {
        actualStart = startOrEnd;
        actualEnd = end;
    }
    for (let i = actualStart; step > 0 ? i< actualEnd : i > actualEnd; i += step) {
        yield i;
    }
}
