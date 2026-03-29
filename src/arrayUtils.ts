type User = { id: number, name:string }

export const getUnique = (arr:number[]):number[]=>{
    return [ ...new Set(arr)];
}

export const getEvens = (arr:number[]):number[] =>{
    return arr.filter((val)=> val %2 === 0);
}

export const findUserById = (users:User[],id:number):User=>{
     return users.find(user => user.id === id) ?? null;
}

export const getAverage = (arr:number[]):number=>{
    return arr.reduce((sum,n)=> sum+n,0)/arr.length
}

