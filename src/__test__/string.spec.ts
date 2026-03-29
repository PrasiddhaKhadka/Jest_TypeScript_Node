import { capitalizeFirstLetter } from "../strings"

describe('stringFunction',()=>{
    test('should make the first letter capital',()=>{
        const result = capitalizeFirstLetter('good-day')

        expect(result).toBe('Good-day')
        }
    )
    test('should check the empty string', ()=>{
        const result = capitalizeFirstLetter('')
        expect(result).toBe('')
    })
    
    test('should check the string that has already first letter capital', ()=>{
        const result = capitalizeFirstLetter('Good-day')
        expect(result).toBe('Good-day')
    })

})
