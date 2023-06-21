
// Problem 1
interface details{
    title : string,
    status : boolean,
    id : number
}


let obj : details = {
    title : "masai sxhool",
    status : true,
    id : 5
}

// Problem 2

function getName<type>(firstname:string,lastname:String | null){
    return {
        firstname , lastname
    }
}

getName("Sarim","khan")

// Problem 3
interface Address{
    houseNo:number,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string,

}

const addressObj = {
    houseNo:433,
    street:"Band Stand",
    city:"Mumbai",
    state:'MP',
    postalCode:45789,
    country:'India',
}