// TASK 3

// In a separate file import(require) previously created functions. Create user input sequence asking user to provide values for functions. Print result in console output. 

// Example

// Please enter numbers two numbers to be compared (separated by enter)

// 1

// 2

// Result : 2 is bigger number.

// Please enter a number N to see how many squares can fit in N * N square grid

// 3

// Result is 14 squares

// Optional User can select witch function to execute


const [log] = require("./logger");
const readLine = require("readline");
const fs = require("fs");
const { push } = require("./logger");


const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});



rl.question(
  "Please enter two numbers to be compared (separated by enter)\n",
  function (number1) {
    rl.question("\n", function (number2) {
      if (number1 < number2) {
        log("Result : " + [number2] + " is bigger number");
        rl.close();
      } else if (number2 < number1) {
        log("Result : " + [number1] + " is bigger number");
        rl.close();
      } else {
        log("Both equal");
        rl.close();
      }
    });
  }
);

rl.question(
  "Please enter a number N to see how many squares can fit in N * N square grid\n",
  function (number3) {
    let a = number3 - 1;
    N = number3 * number3 + a * 2;
    log("Result is " + [N] + " squares");

    rl.close();
  }
);

// fs.appendFile('./documents/results.txt', Data,(push) , {
//   console,log() {

//   }
// });

// both codes work, sadly cant find how to make them work at the same time. On the code number 2, I'm pretty sure got thr right idea, first 1 and 2 works on correct way, 3 loses the track.
