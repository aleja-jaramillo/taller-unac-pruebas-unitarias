import {monthsUnac} from '../src/months-unac';



test("ver si contiene un mes llamado May", ()=>{
    expect(monthsUnac()).toContain('May');
})

test("ver si contiene un total de 12 meses", ()=>{
    expect(monthsUnac()).toHaveLength(12)
})