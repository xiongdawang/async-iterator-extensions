import { insert } from './insert';
import { iteratorToIterable } from './iteratorToIterable';

export function lookahead(howFor) {
    return async function inner(source) {
        const iterator = source[Symbol.asyncIterator]();
        const values = [];
        for (let i = 0; i < howFor; i++) {
            const next = await iterator.next();
            if (next.donw) { break; }
            values.push(next.value);
        }
        return {
            iterable: insert(...values)(iteratorToIterable(iterator)),
            values
        };
    };
}
