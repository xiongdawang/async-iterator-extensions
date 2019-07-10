import { of } from "../of";
import { reduce } from "../reduce";

test("reduce", async () => {
    const result = await reduce(
        (accumulator, next) => accumulator + next, 0
    )(of(1, 2, 3));

    expect(result).toEqual(6);
});
