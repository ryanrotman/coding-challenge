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
// console.log(divide(16, 2));


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

// let logNums = function(num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(i);
//     }
// };

// logNums(5);
// console.log("----------");
// logNums(10);
// console.log("----------");
// logNums(20);
// console.log("----------");
// logNums(40);
// console.log("----------");
// logNums(100);


// TODO: write a function that takes in two numbers and outputs the max (the greater of the two numbers)

// function greaterNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2
// }

// console.log(greaterNumber(10, 2));
// console.log(greaterNumber(10, 30));
// console.log(greaterNumber(10.9, 11));


// TODO: write a function that takes in an integer and outputs the sum of all the numbers from 1 up to that integer

// function totalSum(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         sum += i;
//         console.log("i:", i);
//         console.log("sum:", sum);
//     }
//     return sum;
// };

// console.log("TOTAL:", totalSum(2));
// console.log("----------");
// console.log("TOTAL:", totalSum(4));
// console.log("----------");
// console.log("TOTAL:", totalSum(10));


// TODO: write a function that takes in an array of numbers and outputs the maximum number

// function findMax(arr) {
//     let maxNum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// };

// console.log(findMax([1, 2, 3]));
// console.log(findMax([3, 6, 4, 5, 2, 1, 6.1]));
// console.log(findMax([3, 100, 101]));


// TODO: create a function that prints even numbers from 0 to a given number

// function logEvenNums(num) {
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// };

// logEvenNums(9);
// console.log("----------");
// logEvenNums(27);
// console.log("----------");
// logEvenNums(100);


// TODO: create a function that prints all whole numbers from num to a given number

// function countDown(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
// };

// countDown(10);
// console.log("----------");
// countDown(15);


// TODO: create a function that adds up all the numbers in a given array and returns the total

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };

// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([2, 2, 2, 2]));
// console.log(sumArray([10, 20, 40, 80]));


// TODO: write a function that takes in a string and outputs the number of vowels (not counting y) in that string

// function countVowels(str) {
//     str = str.toLowerCase();
//     let count = 0;
//     let vowels = ("aeiou");
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) >= 0) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countVowels("Hello, World"));
// console.log(countVowels("Why"));
// console.log(countVowels("Mongo, Express, React, Node"));


// TODO: write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("noon"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("racecar"));