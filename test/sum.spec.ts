import {sum} from '../src/sum-array';


test("sumar dos numeros", () => {
    expect(sum([8,8])).toBe(16);
})


test("sumar dos numeros y que su resultado de 512", () => {
    expect(sum([256,256])).toBe(512);
})

test("sumar 8+8=16 pero su resultado sea mayor que 15", () => {
    expect(sum([8,8])).toBeGreaterThan(15);
})

test("sumar dos numeros pero su resultado sea menor de 10", () => {
    expect(sum([2,7])).toBeLessThanOrEqual(10);
})

