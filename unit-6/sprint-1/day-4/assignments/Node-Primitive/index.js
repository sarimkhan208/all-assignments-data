const fs = require("fs");

// complete the following fubctions

function isNumber(num) {
    if(typeof num === 'number'){
        fs.appendFileSync('test.txt','it is a Number.\n')
    }else{
        fs.appendFileSync('test.txt','it is Not a Number.\n')
    }
}

function isStr(str) {
    str = Number(str)
    if(!str){
        fs.appendFileSync('test.txt','it is a String.\n')
    }else{
        fs.appendFileSync('test.txt','it is Not a String.\n')
    }

}

function isArray(arr) {
    if(Array.isArray(arr)){
        fs.appendFileSync('test.txt','it is a Array.\n')
    }else{
        fs.appendFileSync('test.txt','it is Not a Array.\n')
    }

}

function isObj(obj) {
    if(typeof obj === 'object' ){
        fs.appendFileSync('test.txt','this is a object.\n')
    }else{
        fs.appendFileSync('test.txt','this is not a object.\n')
    }

}

function cls() {
    fs.unlinkSync('test.txt');
}

// Export All the functions
module.exports = {isNumber,isStr,isArray,isObj,cls}


let me = {"pair":"jeu"}
console.log(typeof me)
// console.log(typeof "srm")

