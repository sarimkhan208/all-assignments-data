// index.js

// import the crypto module
const crypto = require('crypto');

// get the command and arguments from process.argv
const command = process.argv;
const args = process.argv.slice(3);

// define a function to generate random numbers

function generateRandomNumber(length) {
  if (!length) {
    console.log("Provide length for random number generation.");
    return;
  }
  const bytes = crypto.randomBytes(length);
  const randomNumber = parseInt(bytes.toString("hex"), 16);
  console.log(randomNumber);
}

function generateRandomNumber(length) {
// Asynchronous
const crypto = require('crypto');
const randomNum = crypto.randomInt(100);
console.log(randomNum);
}

// define a function to perform mathematical operations

  switch (command[2]) {
    case 'add':
        console.log(Number(command[3])+Number(command[4]))
        return
    case 'sub':
        console.log(Number(command[3])-Number(command[4]))
        return
    case 'mult':
        console.log(Number(command[3])*Number(command[4]))
        return
    case 'divide':
        console.log(Number(command[3])/Number(command[4]))
        return
    case 'sin':
        console.log(Math.sin(parseFloat(args[0])))
        return ;
    case 'cos':
        console.log(Math.cos(parseFloat(args[0])))
        return ;
    case 'tan':
        console.log(Math.tan(parseFloat(args[0])))
        return ;
    case 'random':
        return generateRandomNumber(parseInt(args[0]));
    default:
      console.log("Invalid operation.");
      return;
    }


// // call the calculate function and log the result

// const result = calculate(command, [1,2]);
// if (result !== undefined) {
//   console.log(result);
// }










