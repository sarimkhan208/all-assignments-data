
const func = async (num1:number,num2:number) => {
    
    try{
        return num1*num2
    }
    catch {
        return 'err'
    }
};
func(4,6)
export default func;
