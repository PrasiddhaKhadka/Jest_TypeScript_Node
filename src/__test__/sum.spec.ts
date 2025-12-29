import { sum } from "../sum"


describe('sumfunction',()=>{
    it('should add two numbers',()=>{
        expect(sum(1,3)).toBe(4)
    });
     it('should handle negative numbers',()=>{
        expect(sum(-1,-3)).toBe(-4)
    })
})
