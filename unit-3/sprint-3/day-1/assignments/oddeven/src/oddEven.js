function getData(data) {
    let res = new Promise(function(resolve,reject){
        if(data%2==0){
            setTimeout(function(){
                resolve("even")
            },4000)
        }
        
        else if(data%2==1){
            setTimeout(function(){
                resolve("odd")
            },2000)
        }
        
        else{
            reject("error")
        }
    })
    return res
}
getData(3)
.then(function(ans){
    console.log(ans)
})
.catch(function(error){
    console.log(error)
})
export default getData
