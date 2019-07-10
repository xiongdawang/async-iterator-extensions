export function pipe(...funs) {
    return function inner(source) {
        let current = source;
        for (fun of funs) {
            current = fun(source);
        }
        return current;
    }
}

