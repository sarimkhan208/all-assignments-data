function job(delay, value) {
    const promise1 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(value)
        },delay)
    })
    return promise1    
}


var results = []
let b = Promise.all([job(1000,10),job(3000,20),job(500,30),job(1500,40)]).then((values) => {
    return values;
});
results.push(b)
export { job, results };
