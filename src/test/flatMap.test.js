import { flatMap } from '../flatMap';
import { of } from '../of';
import { toArray } from '../toArray';

test("flatMap", async () => {
    const result = await toArray(flatMap(async function* (value) {
        yield value * 2;
    })(of(1, 2, 3)));
    expect(result).toEqual([2, 4, 6]);
});
