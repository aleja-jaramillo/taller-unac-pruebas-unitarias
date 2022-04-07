import { crazy } from '../src/crazy-method';
//Test bueno
test("Test resultado = 0 + number1 = 2 ", () =>{
    //probar
    expect(crazy(2,3)).toBe(8);
});
//Test malo
test("Test resultado = 0 + number1 = 2 ", () =>{
    //probar
    
    expect(crazy(0,2)).toBe(5);
});


