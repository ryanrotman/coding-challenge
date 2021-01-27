// TODO: create functions capable of different arithmetic operations

// let add = function(num1, num2) {
//     return num1 + num2;
// };

// let subtract = function(num1, num2) {
//     return num1 - num2;
// };

// let multiply = function(num1, num2) {
//     return num1 * num2;
// }

// let divide = function(num1, num2) {
//     return num1 / num2;
// }

// console.log(add(8, 2));
// console.log(subtract(10, 5));
// console.log(multiply(5, 2));
// console.log(divide(10, 2));


// TODO: create a function that determines whether a number is odd or even

// let oddOrEven = function(num) {
//     if (num % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// };

// console.log("1:", oddOrEven(1));
// console.log("3:", oddOrEven(3));
// console.log("2:", oddOrEven(2));
// console.log("4:", oddOrEven(4));
// console.log("1001:", oddOrEven(1001));
// console.log("10002:", oddOrEven(10002));


// TODO: create a function that prints all whole numbers from 1 to a given number

let logNums = function(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

logNums(5);
console.log("----------");
logNums(10);
console.log("----------");
logNums(20);
console.log("----------");
logNums(40);
console.log("----------");
logNums(100);