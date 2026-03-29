import { sum,divide } from "../sum"


describe('sumfunction',()=>{
    test('should add two numbers',()=>{
        expect(sum(1,3)).toBe(4)
    });
     test('should handle negative numbers',()=>{
        expect(sum(-1,-3)).toBe(-4)
    });

    test('should divide number',()=>{
        const result = divide(10,5)

        expect(result).toBe(2)
    })

    test('should return null for divisor 0', ()=>{
        const result = divide(5,0)
        expect(result).toBe(null)
    })
})
