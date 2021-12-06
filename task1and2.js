// TASK 1

// Part 1

// Create a function that returns bigger number of two biggerNumber(a, b)

// Examples

// biggerNumber(1, 3) ➞ 3
// biggerNumber(6, 3) ➞ 6

// Notes

// Input is a positive integer.

// Part 2

// Create a function that calculates the number of different squares in an n * n square grid.

// Examples

// numberSquares(2) ➞ 5

// numberSquares(4) ➞ 30

// numberSquares(5) ➞ 55

// Explanation

//  * If n = 0 then the number of squares is 0 If n = 1 then the number of squares is 1 + 0 = 1
//  * If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
//  * If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

// As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

// Notes

// Input is a positive integer.

// Part 1
console.log();

const a = 3;
const b = 4;

if (a > b) {
  console.log("biggerNumber(" + [a] + "," + [b] + ")->" + [a]);
} else if (a < b) {
  console.log("biggerNumber(" + [a] + "," + [b] + ")->" + [b]);
} else {
  console.log("Both equal!!!");
}
console.log();

// Part 2

for (let i = 1; i < 10; i++) {
  n = i * i;

  let numberSquares = n + n + i;
  console.log("numberSquares" + "[" + [i] + "]" + " -> " + [numberSquares]);
}
// The answer is very close, really can't see where's problem.

// TASK 2

// Export module functions numberSquares(n), biggerNumber(a, b)