export const add= (a:number,b:number):number =>{
    return a+b;
}

export const sub = (a:number, b:number):number =>{
    return a-b;
}


export const mul = (a:number, b:number):number =>{
    return a * b;
}

export const isEven = (i:number):boolean=>{
    return i% 2 === 0;
}

export const createUser = (name:string, age:string):{name:String, age:String}=>{
    return { name, age };
}


export const createJwtToken =  ():String =>{
    return '';
}

export const calculateAverage = (arr:number[]):number =>{
    if(arr.length === 0) return 0;
    
    const sum = arr.reduce((total,sum)=>total+sum)
    return sum / arr.length;
}