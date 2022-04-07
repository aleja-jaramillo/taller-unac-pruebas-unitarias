import {monthsUnac} from '../src/months-unac';



test("ver si contiene un mes llamado May", ()=>{
    expect(monthsUnac()).toContain('May');
})

test("ver si contiene un total de 12 meses", ()=>{
    expect(monthsUnac()).toHaveLength(12)
})

test("ver si contiene un mes llamado febrero", ()=>{
    expect(monthsUnac()).not.toContain('febrero')
})