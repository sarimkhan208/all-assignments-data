import { error } from "console";

const func = (a:number,b:number):number => {
    if (typeof a == 'string' || typeof b == 'string') {
        throw new Error('Both arguments must be numbers');
      }
    if (b === 0) {
    throw new Error('Cannot divide by zero');
    }
    return a/b
};




func(4,5)

export default func;// Make no changes here 
