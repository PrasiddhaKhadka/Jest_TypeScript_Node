import { capitalizeFirstLetter } from "../strings"

describe('capitalizeFirstLetter',()=>{
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
    
    test('should handle a single character', () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
    });

    test('should not modify non-letter first characters', () => {
        expect(capitalizeFirstLetter('123abc')).toBe('123abc');
    });
    
    test('should handle all uppercase string', () => {
        expect(capitalizeFirstLetter('HELLO')).toBe('HELLO');
    });

})
