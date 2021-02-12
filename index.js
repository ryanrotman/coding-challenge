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

// function countVowels2(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i].toLowerCase();
//         if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//             count += 1;
//         }
//     }
//     return count;
// };

// console.log(countVowels2("Hello, World"));
// console.log(countVowels2("Why"));
// console.log(countVowels2("Mongo, Express, React, Node"));


// TODO: write a function that takes in a single word as a string and returns true if it’s a palindrome and false otherwise

// function isPalindrome(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[str.length - (i + 1)]) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPalindrome("noon"));
// console.log(isPalindrome("horse"));
// console.log(isPalindrome("racecar"));

// function isPalindrome2(str) {
//     return str.split("").reverse().join("") === str;
// };

// console.log(isPalindrome2("noon"));
// console.log(isPalindrome2("horse"));
// console.log(isPalindrome2("racecar"));


// TODO: write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string

// function firstOccurence(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         let currentCharacter = str[i];
//         let count = 0;

//         for (let j = 0; j < str.length; j++) {
//             if (str[j] === currentCharacter) {
//                 count++;
//             }
//         }
//         if (count === 1) {
//             return currentCharacter;
//         }
//     }
// };

// console.log(firstOccurence("The quick brown fox jumps over the calm kitten quietly"));
// console.log(firstOccurence("This hat is the greatest!"));
// console.log(firstOccurence("What a wonderful day it has been!"));

// function firstOccurence2(str) {
//     var charCount = {};
//     for (var i = 0; i < str.length; i++) {
//         var currentCharacter = str[i];
//         if (charCount[currentCharacter]) {
//             charCount[currentCharacter]++;
//         } else {
//             charCount[currentCharacter] = 1;
//         }
//     }
//     for (var x in charCount) {
//         if (charCount[x] === 1) {
//             return x;
//         }
//     }
// }

// console.log(firstOccurence2("the quick brown fox jumps over the calm kitten quietly"));
// console.log(firstOccurence2("this hat is the greatest!"));
// console.log(firstOccurence2("what a wonderful day it has been!"));


// TODO: create a function that solves the Fizz Buzz problem

// function fizzBuzz(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 15 === 0) {
//             console.log("Fizz Buzz");
//         } else if (arr[i] % 3 === 0) {
//             console.log("Fizz");
//         } else if (arr[i] % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(arr[i]);
//         }
//     }
// };

// fizzBuzz([13, 14, 15, 16, 17, 18, 19, 20]);
// console.log("----------");
// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


// TODO: write a function that takes in an array of numbers and outputs the average of all the numbers

// function arrayAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let average = sum / arr.length;
//     return average;
// }

// console.log(arrayAverage([1, 4, 7]));
// console.log("----------");
// console.log(arrayAverage([10, 5]));
// console.log("----------");
// console.log(arrayAverage([1.5, 3, 2.5, 1]));


// TODO: write a function that takes in an input and returns true if it’s an integer and false otherwise

// function isInteger(num) {
//     return Math.floor(num) === num;
// }

// console.log(isInteger("7"));
// console.log(isInteger(7));
// console.log(isInteger(4.3));


// TODO: create a function returns the factorial of a given number

// function factorial(num) {
//     let result = 1;
//     for (let i = num; i > 1; i--) {
//         console.log("i = ", i);
//         result = result * i;
//         console.log("result = ", result);
//     }
//     return result;
// }

// console.log(factorial(4));
// console.log("----------");
// console.log(factorial(3));
// console.log("----------");
// console.log(factorial(0));
// console.log("----------");
// console.log(factorial(1));


// TODO: create a function that capitalizes the first letter of every word in a given string

// const titleCase = (str) => {
//     console.log("INPUT STRING: ", str);
//     let result = [];
//     let words = str.split(" ");
//     console.log("WORDS FROM INPUT STRING: ", words);

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i].split("");
//         console.log("WORD-SEPARATE: ", word);
//         word[0] = word[0].toUpperCase();
//         console.log("UPPER CASE LETTER: ", word[0]);
//         result.push(word.join(""));
//         console.log("RESULT-SEPARATE: ", result);
//     }
//     return result.join(" ");
// }

// console.log(titleCase("a lannister always pays his debts"));


// TODO: write a function that takes an array of integers as an input and outputs the first duplicate. If no duplicates exist, return undefined

// function firstDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("arr[i]:", arr[i]);
//         for (let j = 0; j < i; j++) {
//             console.log("arr[j]", arr[j]);
//             if (arr[i] === arr[j]) {
//                 return arr[i];
//             }
//         }
//     }
// }

// console.log(firstDuplicate([2, 5, 6, 3, 5]))
// console.log("----------");
// console.log(firstDuplicate([1, 3, 4, 1, 3, 4]))
// console.log("----------");
// console.log(firstDuplicate([2, 4, 5]))


// TODO: write a function that takes in a string and returns true if it’s a pangram, or false otherwise

// function isPangram(str) {
//     str = str.toLowerCase();
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     for (let i = 0; i < alphabet.length; i++) {
//         console.log(alphabet[i]);
//         if (!str.includes(alphabet[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPangram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
// console.log("----------");
// console.log(isPangram("Five hexing wizard bots jump quickly"));
// console.log("----------");
// console.log(isPangram("JavaScript is the best"));


// TODO: create a function that swaps the letter case of each character in a string

// function swapCase(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];

//         if (letter === letter.toUpperCase()) {
//             result += letter.toLowerCase();
//         } else {
//             result += letter.toUpperCase();
//         }
//     }
//     return result;
// };

// console.log(swapCase("StOp"));
// console.log("----------");
// console.log(swapCase("Luke, I Am Your Father"));


// TODO: create a function that takes a string containing space-separated words and returns the longest word in the string

function longestWord(str) {
    let words = str.split(" ");
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord
        }
    }
    return longestWord;
}

console.log(longestWord("i love programming"));
console.log(longestWord("----------"));
console.log(longestWord("It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball"));