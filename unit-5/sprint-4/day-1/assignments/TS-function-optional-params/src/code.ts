// This the function
const getName = (firstname:string,lastname?:string):string =>{
    if(lastname){
        return `${firstname} ${lastname}`
    }else{
        return `${firstname}`
    }
}
getName('nrupaul')

export default getName;// Make no changes here