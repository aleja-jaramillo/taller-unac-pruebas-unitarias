import { translateUnac } from '../src/switch-translate';

//Test buenos
test("traducir Hi a Hola", () =>{
    //probar
    expect(translateUnac('hi')).toMatch(/hola/);
});

test("traducir bye a adios", () =>{
    //probar
    expect(translateUnac('bye')).toMatch(/adios/);
});
test("traducir moon a luna", () =>{
    //probar
    expect(translateUnac('moon')).toMatch(/luna/);
});
test("traducir moon a luna", () =>{
    //probar
    expect(translateUnac('Moon')).toMatch(/default/);
});

// test malos 
test("traducir moon a luna", () =>{
    //probar
    expect(translateUnac('moon')).toMatch(/Luna/);
});


