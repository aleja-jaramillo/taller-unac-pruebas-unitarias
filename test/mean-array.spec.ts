import {mean} from '../src/mean-array'


test("recibe dos numero (2,3)=5 da resultado cinco y se divide entre 2 da como resultado 5. la prueba expresa que el resultado es mayor que 2", ()=>{
    expect(mean([2,3])).toBeGreaterThan(2);
})


test("recibe dos numero (5,5)=10 y se divide entre 2 da como resultado 5. que su resultado sea menor que 5", ()=>{
    expect(mean([2,3])).toBeLessThanOrEqual(5);
})