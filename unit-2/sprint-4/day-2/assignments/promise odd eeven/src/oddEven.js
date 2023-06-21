

function getData(data){
    let promise = new Promise(function(resolve,reject){
        if(typeof data == "string"){
            reject("error");
        }
        else if(data%2==0){
            setTimeout(function(){
                resolve("even");
            },4000)
        }
        else{
            setTimeout(function(){
                resolve("odd");
            },2000)
        }
    })
    return promise;
}
let cont = getData(3);
cont.then(function(){
    console.log(cont);
})
.catch(function(){
    console.log(cont);
})


export default getData
