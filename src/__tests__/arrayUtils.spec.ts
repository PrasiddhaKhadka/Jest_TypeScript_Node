import {
  getUnique,
  getEvens,
  findUserById,
  getAverage
} from '../arrayUtils';



describe('getUnique',()=>{

    test('should remove duplicate numbers',()=>{
        const result = getUnique([1, 2, 2, 3, 3, 3]);
        expect(result).toEqual([1,2,3]);
    })

    test('should return same array if no duplicates', () => {
        expect(getUnique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should return empty array if input is empty', () => {
        expect(getUnique([])).toEqual([]);
    });
})



describe('getEvens',()=>{
    
    test('should return only even numbers', () => {
        expect(getEvens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('should return empty array if no evens exist', () => {
        expect(getEvens([1, 3, 5])).toEqual([]);
    });

    test('should handle empty array', () => {
        expect(getEvens([])).toEqual([]);
    });
})


describe('findUserById',()=>{

    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];

    test('should find and return the correct user',()=>{
        const result = findUserById(users, 2);
        expect(result).toEqual({ id: 2, name: 'Bob' });
    })

    test('should return null if user not found', () => {
         const result = findUserById(users, 99);
         expect(result).toBeNull();
    });

    test('should return correct user — not just any user', () => {
        const result = findUserById(users, 1);
        expect(result?.name).toBe('Alice'); 
        expect(result?.id).toBe(1);
    });
})


describe('getAverage', () => {

    test('should calculate average correctly', () => {
        expect(getAverage([10, 20, 30])).toBe(20);
    });

    test('should return 0 for empty array', () => {
        expect(getAverage([])).toBe(0);
    });

    test('should handle floating point averages', () => {
        expect(getAverage([1, 2])).toBeCloseTo(1.5);
    });

});