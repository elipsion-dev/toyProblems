//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 1.) REVERSE WORD
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Reverse whole string
function reverse(word) {
        return word.split("").reverse().join("");
}

// Reverse each individual word
function rev(str) {
        return str.split(' ').map(function (word) {
                return word.split('').reverse().join('');
        }).join(' ');
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 2.) ANAGRAM
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Take a given word as a string and see if the second word can be spelled with the letters scrambled.

// anagram("anagram","nagaram"); // true
// anagram("rat","car"); // false
// anagram("ryan","nyar"); // true
// anagram("Ryan","nyar"); // false
function anagram(word1, word2) {
        let count = 0;
        for (i = 0; i < word1.length; i++) {
                if (word2.indexOf(word1[i]) > -1) {
                        count++
                }
        }
        return count === word2.length ? true : false
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 3.) EXPONENT POWER
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// find exponents with base and exponent given

// exponent(2, 3); // returns 8
// exponent(4, 4); // returns 256
// exponent(3, 3); // returns 27
// exponent(3, 4); // returns 81
function exponent(num, power) {
        return Math.pow(num, power)
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 4.) CONVENIENCE STORE
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Given a total due and an array representing the amount in your poecket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies. 

//changeEnough([2,100,0,0], 14.11) ---> false
//changeEnough([25,20,5,0], 4.25) ---> true
//changeEnough([0,1,20,5], 0.75) ---> true
function changeEnough(array, total) {
        return (array[0] * .25) + (array[1] * .10) + (array[2] * .05) + (array[3] * .01) >= total ? true : false
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 5.) CHECK PRIME
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Question: How would you verify a prime number?
// Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1. 

// isPrime(137) = true
// isPrime(237) = false
function isPrime(n) {
        let divisor = 2;
        while (n > divisor) {
                if (n % divisor == 0) {
                        return false;
                }
                else divisor++;
        }
        return true;
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 6.) PRIME FACTORS
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Question: How could you find all prime factors of a number?
// Answer: Run a while loop. start dividing by two and if not divisible increase divider until done.

// primeFactors(69) = [3, 23]
function primeFactors(n) {
        let factors = [], divisor = 2;
        while (n > 2) {
                if (n % divisor === 0) {
                        factors.push(divisor);
                        n = n / divisor;
                }
                else divisor++;
        }
        return factors;
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 7.) Exclamation
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Write a function called exclamation(str) that appends an exclamation mark to the end of every capitalized word in a string. If none of the words in the string are capitalized, it should append an exclamation mark to every word.

// exclamation('Hey Wow this is really Great'); // returns 'Hey! Wow! this is really Great!'
// exclamation('none of these words are capitalized'); // returns 'none! of! these! words! are! capitalized!'

function exclamation(str) {
        let regex = /[A-Z]/
        return str.split(' ').map(function (word) {
                if (regex.test(str) === false) {
                        return word = word + "!"
                }
                if (word.match(regex)) {
                        return word = word + "!"
                } else {
                        return word
                }
        }).join(' ')
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 8.) Duplicator
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// This function takes an array of elements and returns a new array with every element present twice.  Note, it does not duplicate array elements that are already present twice.  Also, the duplicates must be directly next to one another

// duplicator([23,24,66,65,12,12]) //returns [23,23,24,24,66,66,65,65,12,12]
// duplicator(['me','you']) //returns ['me','me','you','you]

function duplicator(array) {
        let final = []
        let newArr = Array.from(new Set(array))
        newArr.map(el => { final.push(el); final.push(el) })
        return final
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 9.) Double The Mutable
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// function that doubles strings in place

// doubleTheMutable("this str doubled"); //returns thisthis strstr doubleddoubled
// doubleTheMutable("Ryan James Riesenberger"); //returns RyanRyan JamesJames RiesenbergerRiesenberger
// doubleTheMutable("Double ME!"); //returns DoubleDouble ME!ME!

function doubleTheMutable(str) {
        return str.split(' ').map(function (word) {
                return word.repeat(2)
        }).join(' ')
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 10.) DNA Pairing
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// A DNA strand is missing its pairing element. Take each character, get its pair, and return the results as a 2-D array.  Bases pair A+T and C+G. Match the missing element to the provided character.  Return the provided character as the first element in each array. 

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]].  The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// DNAElement("ATCGA"); //Returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// DNAElement("TTGAG"); //Returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// DNAElement("CTCTA"); //Returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].



function DNAElement(str) {
        return str.toUpperCase().split('').map(function (letter) {
                return letter === "A" ? ["A", "T"] : letter === "C" ? ["C", "G"] : letter === "G" ? ["G", "C"] : ["T", "A"]
        })
}
// console.log(DNAElement("ATCGA"))



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 11.) Dive and Delete
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Dive and delete a specified number within a multidimensional array.

// diveAndDelete([3,1,2,[3,4,[5],6],7,4,8], 4); // returns [3,1,2,[3,[5],6],7,8]
// diveAndDelete([3,1,2,[3,4,[5],6],7,4,8], 3); // returns [1,2,[4,[5],6],7,4,8]
// diveAndDelete([3,1,2,[3,4,[5],6],7,4,8], 5); // returns [3,1,2,[3,4,6],7,4,8]

function diveAndDelete(arr, num) {
        for (let i = 0; i < arr.length; i += 1) {       //Loop through the array
                if (arr[i] === num) {                   //If current elem = num
                        arr.splice(i, 1)                //Splice it out
                }
                if (Array.isArray(arr[i])) {            //Else if current elem = array
                        diveAndDelete(arr[i], num)      //Recursively call the function and dive into the inner aray
                }
        }
        return arr
}
// console.log(diveAndDelete([3, 1, 2, [3, 4, [5, 4, [3, 2, 4, [3, 5, 7, [5, 7, 4]], 7], 6], 6], 7, 4, 8], 4))



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 12.) DisemVoweler
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Write a function called disemvoweler that takes a string as an argument and returns it with all of the vowels removed

// disemVoweler('Fitness Monkey'); // returns 'Ftnss Mnky'

function disemVoweler(str) {
        return str.replace(/[aeiou]/ig, "")
};



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// 13.) Difference of Two Arrays
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],["diorite", "andesite", "grass", "dirt", "dead shrub"])
// //Returns ["pink wool"]

// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],["diorite", "andesite", "grass", "dirt", "dead shrub"])
// //Returns["diorite", "pink wool"]

// diffArray(["andesite", "grass", "dirt", "dead shrub"],["andesite", "grass", "dirt", "dead shrub"])
// //Returns []

// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// //Returns ["snuffleupagus", "cookie monster", "elmo"]

// diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
// //Returns [1, "calf", 3, "piglet", 7, "filly"]

let diff = (arr, arr2) => arr.filter(function (i) { return arr2.indexOf(i) < 0; }) //Filter Function to use with next 2 problems
function diffArray(array, array2) {
        let newArray = []
        newArray.push(...diff(array, array2), ...diff(array2, array))
        return newArray
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 14.) More Array Difference
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Find the difference between two arrays.  Remove any instances from the first array that are contained in the second array, and add any instances from the second array into the first array.

// difference2([1, 2, 3, 4, 5], [5, 2, 10]);// returns [1, 3, 4, 10]
// difference2([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]);// returns [4, 5, 6, 7]
// difference2([1, 2, 3, 4, 5], [1, 5, 3]);// [2, 4]
function difference2(array, array2) {
        let newArray = []
        newArray.push(...diff(array, array2), ...diff(array2, array))
        return newArray
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 15.) First Factorial
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example: if n=4, n! = 4 * 3 * 2 * 1 => 24
// Write a function to return the factorial of a number

function factorial(num) {
        factorial[1] = 1;
        if (!(num in factorial)) {
                factorial[num] = num * factorial(num - 1);
        }
        return factorial[num];
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 16.) Seek and Destroy
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more target arguments.  Remove all elements from the initial array that are of the same value as the targets.

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);// returns [1, 1]
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);// returns [1, 5, 1]
// destroyer([3, 5, 1, 2, 2], 2, 3, 5);// returns [1]
// destroyer([2, 3, 2, 3], 2, 3);// returns []
// destroyer(["tree", "hamburger", 53], "tree", 53);// returns ["hamburger"]

function destroyer(array, ...nums) {
        for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < nums.length; j++) {
                        array[i] === nums[j] && delete array[array.indexOf(nums[j])]
                }
        }
        return array.flat()
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 17.) Dash Inserter
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Have the function DashInserter(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str.
// For example: if str is 4546793 the output should be 454*67-9-3.
// Don't count zero as an odd or even number.

// dashInserter("4546793"); //returns 454*67-9-3
// dashInserter("9184395724"); //returns 9-18*43-9-5-72*4
// dashInserter("18469465167896448946"); //returns 18*4*694*65-167896*4*4*894*6
// dashInserter("441122336655887799"); //returns 4*41-12*23-36*65-58*87-7-9-9

function dashInserter(str) {
        let newStr = "";
        const evenOdd = chk => (chk % 2 === 0) ? 0 : 1;
        for (i = 0; i < str.length; i++) {
                let sum = (str[i] === 0) ? 3 : evenOdd(str[i]) + evenOdd(str[i + 1]);
                sum === 0 ? newStr += str[i] + "*" : sum === 2 ? newStr += (i + 1 === str.length) ? str[i] : str[i] + "-" : newStr += str[i]
        }
        return newStr
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 18.) Curve
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Add a given amount to each number in an array, then return the array.

// curve([77, 73, 74, 81, 90], 5); //return [82, 78, 79, 86, 95]

function curve(array, num) {
        for (i = 0; i < array.length; i++) {
                array[i] = array[i] + num
        }
        return array
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 19.) Count Down
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Countdown from num to (zero) separated by a comma between the numbers

// countDown(11); //returns 11,10,9,8,7,6,5,4,3,2,1,0

function countDown(num) {
        let str = ""
        while (num > 0) {
                str += num + ","
                num--
                if (num === 0) {
                        str += num
                }
        }
        return str
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 20.) Count By Increment
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Count up to a number by a given increment

// countByIncrement(3,15); //returns [3, 6, 9, 12, 15]
// countByIncrement(3,39); //returns [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39]

function countByIncrement(inc, stop) {
        let array = [], num = inc
        while (inc < stop) {
                array.push(inc)
                inc += num
        }
        array.push(stop)
        return array
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 21.) Correct Change
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Write a function called correctChange() that accepts two arguments. The first argument represents the total purchase price of a transaction. The second argument represents the amount tendered. Your function should return a string indicating the correct amount of change and should be formatted as follows:
//  "The correct change is $xx.xx"

// correctChange(23.45, 40.00); // returns "The correct change is $16.55"
// correctChange(19.05, 20.00); // returns "The correct change is $0.95"

// OR

// Extra credit: return the correct amount of dollars and coins in change
// correctChange(19.05, 20.00); // returns "The correct change is 0 dollars, 3 quarters, 2 dimes, 0 nickels, and 0 pennies"
// OR

function correctChange(total, paid) {
        return "The correct change is $" + (paid - total).toFixed(2)
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 22.) Roman Numeral Converter
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Convert the given number into a roman numeral.  All roman numerals answers should be provided in upper-case.

// convertToRoman(2);// should return "II".
// convertToRoman(3);// should return "III".
// convertToRoman(4);// should return "IV".
// convertToRoman(5);// should return "V".
// convertToRoman(9);// should return "IX".
// convertToRoman(12);// should return "XII".
// convertToRoman(16);// should return "XVI".
// convertToRoman(29);// should return "XXIX".
// convertToRoman(44);// should return "XLIV".
// convertToRoman(45);// should return "XLV"
// convertToRoman(68);// should return "LXVIII"
// convertToRoman(83);// should return "LXXXIII"
// convertToRoman(97);// should return "XCVII"
// convertToRoman(99);// should return "XCIX"
// convertToRoman(500);// should return "D"
// convertToRoman(501);// should return "DI"
// convertToRoman(649);// should return "DCXLIX"
// convertToRoman(798);// should return "DCCXCVIII"
// convertToRoman(891);// should return "DCCCXCI"
// convertToRoman(1000);// should return "M"
// convertToRoman(1004);// should return "MIV"
// convertToRoman(1006);// should return "MVI"
// convertToRoman(1023);// should return "MXXIII"
// convertToRoman(2014);// should return "MMXIV"
// convertToRoman(3999);// should return "MMMCMXCIX"

function convertToRoman(num) {
        let long = num.toString()
        let str = ""
        if (long.length === 1) {
                if (num === 1) str = "I"; if (num === 2) str = "II"; if (num === 3) str = "III"; if (num === 4) str = "IV"; if (num === 5) str = "V"; if (num === 6) str = "VI"; if (num === 7) str = "VII"; if (num === 8) str = "VIII"; if (num === 9) str = "IX";
        }
        if (long.length === 2) {
                if (long[0] === "1") str += "X"; if (long[0] === "2") str += "XX"; if (long[0] === "3") str += "XXX"; if (long[0] === "4") str += "XL"; if (long[0] === "5") str += "L"; if (long[0] === "6") str += "LX"; if (long[0] === "7") str += "LXX"; if (long[0] === "8") str += "LXXX"; if (long[0] === "9") str += "XC"; if (long[1] === '1') str += "I"; if (long[1] === '2') str += "II"; if (long[1] === '3') str += "III"; if (long[1] === '4') str += "IV"; if (long[1] === '5') str += "V"; if (long[1] === '6') str += "VI"; if (long[1] === '7') str += "VII"; if (long[1] === '8') str += "VIII"; if (long[1] === '9') str += "IX";
        }
        if (long.length === 3) {
                if (long[0] === "1") str += "C"; if (long[0] === "2") str += "CC"; if (long[0] === "3") str += "CCC"; if (long[0] === "4") str += "CD"; if (long[0] === "5") str += "D"; if (long[0] === "6") str += "DC"; if (long[0] === "7") str += "DCC"; if (long[0] === "8") str += "DCCC"; if (long[0] === "9") str += "CM"; if (long[1] === "1") str += "X"; if (long[1] === "2") str += "XX"; if (long[1] === "3") str += "XXX"; if (long[1] === "4") str += "XL"; if (long[1] === "5") str += "L"; if (long[1] === "6") str += "LX"; if (long[1] === "7") str += "LXX"; if (long[1] === "8") str += "LXXX"; if (long[1] === "9") str += "XC"; if (long[2] === '1') str += "I"; if (long[2] === '2') str += "II"; if (long[2] === '3') str += "III"; if (long[2] === '4') str += "IV"; if (long[2] === '5') str += "V"; if (long[2] === '6') str += "VI"; if (long[2] === '7') str += "VII"; if (long[2] === '8') str += "VIII"; if (long[2] === '9') str += "IX";
        }
        if (long.length === 4) {
                if (long[0] === "1") str += "M"; if (long[0] === "2") str += "MM"; if (long[0] === "3") str += "MMM"; if (long[0] === "4") str += "MMMM"; if (long[0] === "5") str += "MMMMM"; if (long[0] === "6") str += "MMMMMM"; if (long[0] === "7") str += "MMMMMMM"; if (long[0] === "8") str += "MMMMMMMM"; if (long[0] === "9") str += "MMMMMMMMM"; if (long[1] === "1") str += "C"; if (long[1] === "2") str += "CC"; if (long[1] === "3") str += "CCC"; if (long[1] === "4") str += "CD"; if (long[1] === "5") str += "D"; if (long[1] === "6") str += "DC"; if (long[1] === "7") str += "DCC"; if (long[1] === "8") str += "DCCC"; if (long[1] === "9") str += "CM"; if (long[2] === "1") str += "X"; if (long[2] === "2") str += "XX"; if (long[2] === "3") str += "XXX"; if (long[2] === "4") str += "XL"; if (long[2] === "5") str += "L"; if (long[2] === "6") str += "LX"; if (long[2] === "7") str += "LXX"; if (long[2] === "8") str += "LXXX"; if (long[2] === "9") str += "XC"; if (long[3] === '1') str += "I"; if (long[3] === '2') str += "II"; if (long[3] === '3') str += "III"; if (long[3] === '4') str += "IV"; if (long[3] === '5') str += "V"; if (long[3] === '6') str += "VI"; if (long[3] === '7') str += "VII"; if (long[3] === '8') str += "VIII"; if (long[3] === '9') str += "IX";
        }
        return str
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 23.) Convert To Ranges
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Convert the given numbers into two digit array ranges

// convertToRanges("4,5,6,7,10,11,12,13,89,90,91,92,93") -> [ [4, 7], [10, 13], [89, 93] ]; 
// convertToRanges("1,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19")-> [ [1, 4], [6, 9], [11, 14], [16, 19] ];

function convertToRanges(str) {
        str = str.split(',')
        let outer = []
        let inner = []
        let range = () => {
                let counter = 0
                for (let i = 0; i < str.length; i++) {
                        if (str[i] * 1 + 1 === str[i + 1] * 1) {
                                inner.push(str[i] * 1);
                                counter++;
                        } else {
                                inner.push(str[i] * 1);
                                counter++;
                                break;
                        }
                }
                outer.push(inner)
                inner = []
                str.splice(0, counter)
        }
        while (str.length > 0) range()
        return outer
}
// console.log(convertToRanges("4,5,6,7,10,11,12,13,89,90,91,92,93"))
// console.log(convertToRanges("1,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19"))



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 24.) Convert to Celsius
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Convert a Fahrenheit measurement to Celsius; the formula is:
// (°C × 9/5) + 32 = °F

// convertToCels(95); // returns 35
// convertToCels(32); // returns 0
// convertToCels(14); // returns -10

function convertToCels(f) {
        return ((f - 32) * 5 / 9)
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 25.) Convert HTML Entities
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana"); //Returns Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos"); //Returns Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve"); //Returns Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"'); //Returns Stuff in &quot;quotation marks&quot;.
// convertHTML("Shindler's List"); //Returns Shindler&apos;s List.
// convertHTML("<>"); //Returns &lt;&gt;.
// convertHTML("abc"); //Returns abc.

function convertHTML(str) {
        return str.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;").replace(/["]/g, "&quot;").replace(/[']/g, "&apos;");
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 26.) Consonant Count
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// This function takes a string as its argument and returns a count of the number of consonants in the string. Count 'y' as a consonant!

// consonantCount('Hello whats up friend') -> 12
// consonantCount('Zebras are fun') -> 7

function consonantCount(str) {
        return str.replace(/[^qwrtyplkjhgfdszxcvbnm]/gi, '').length
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 27.) Compute Average
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Given an array of numbers, compute the average and return a rounded result.  Tip: use Math.round()

// computeAverage([2,12,14]) //returns 9

function computeAverage(array) {
        let sum = 0
        for (var nums in array) {
                sum += array[nums]
        }
        return Math.round(sum / array.length)
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 28.) Chunky Monkey
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Write a function that splits an array (first argument) into groups the length of size (second argument), and returns them as a two-dimensional array.

// chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 10); // should return [[0, 1, 2, 3, 4, 5, 6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

function chunkArrayInGroups(array, length) {
        let newArray = []
        let split = () => {
                let toPush = array.splice(0, length)
                newArray.push(toPush)
        }
        while (array.length > 0) {
                split()
        }
        return newArray
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 29.) Check Prime
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// A number that is only divisible by itself and 1 is prime

// checkPrime(17); //true
// checkPrime(21); //false
// checkPrime(121); //false
// checkPrime(509); //true

function checkPrime(n) {
        var divisor = 2;
        while (n > divisor) {
                if (n % divisor == 0) {
                        return false;
                }else divisor++;          
        }
        return true;
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 30.) Check Function
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Check to see if a given input is a function or not.  Throw error if not.

// checkFunc(checkBool); // returns checkBool function
// checkFunc("this is a string"); //TypeError: Error: Function expected, string given.

function checkFunc(test) {
        return (typeof (test) === "function") ? test : "TypeError: Error: Function expected, string given."
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 31.) Counting Cards
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.  Having more high cards remaining in the deck favors the player.  Each card is assigned a value according to the table below.  When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Count Change Cards
// +1 2, 3, 4, 5, 6
// 0 7, 8, 9
// -1 10, 'J', 'Q', 'K', 'A'

// You will write a card counting function.  It will receive a card parameter and increment or decrement the global count varies according to the card's value (see table).  The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.  The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.

// Example Output
// "-3 Hold", "5 Bet"

// countingCards([2, 3, 4, 5, 6]);//returns "5 Bet"
// countingCards([7, 8, 9]);//returns "0 Hold"
// countingCards([10, 'J', 'Q', 'K', 'A']);//returns "-5 Hold"
// countingCards([3, 7, 'Q', 8, 'A']);//returns "-1 Hold"
// countingCards([2, 'J', 9, 2, 7]);//returns "1 Bet"
// countingCards([2, 2, 10]);//returns "1 Bet"
// countingCards([3, 2, 'A', 10, 'K']);//returns "-1 Hold"

function countingCards(array) {
        var count = 0;
        for (var cards in array) {
                switch (array[cards]) {
                        case 2: case 3: case 4: case 5: case 6: count++;
                                break;
                        case 7: case 8: case 9: count += 0;
                                break;
                        case 10: case "J": case "Q": case "K": case "A": count--;
                                break;
                }
        }
        return count + (count > 0 ? " Bet" : " Hold")
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 32.) Capitalizer
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Write a function that takes in a string of lowercase words, capitalizes the first letter, and then pushes each word into an array and returns the array

// capper('dog', 'cat', 'bird', 'fish'); // returns ['Dog', 'Cat', 'Bird', 'Fish']
// console.log(capper('zach', 'summit', 'ryan', 'harash', 'jad')) => ["Zach", "Summit", "Ryan", "Harash", "Jad"];

function capper(...args) { 
        return args.map(word => {
                return word = word.replace(word[0], word[0].toUpperCase())
        })
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 33.) Capitalize Last Name
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Takes a name as a string and lowercases the first word with the exception of the first letter and uppercases the entire last word.

// capitalizeLastName("RyAn rEseinBurGEr"); //returns Ryan RESEINBURGER
// capitalizeLastName("jereMY maYFieLd"); //returns Jeremy MAYFIELD

function capitalizeLastName(name) {
        return name.split(' ').map(function (s, i) {
                if (i === 0) {
                        return s.split('').map(function (x, y) {
                                return (y === 0) ? x.toUpperCase() : x.toLowerCase()
                        }).join('')
                } else return s.toUpperCase()
        }).join(' ')
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 34.) Caesars Cipher
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.  In a shift cipher the meanings of the letters are shifted by some set amount.  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.  Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.  Write a function which takes a ROT13 encoded string as input and returns a decoded string.  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// caesarsCipher("SERR PBQR PNZC"); // Returns "FREE CODE CAMP"
// caesarsCipher("SERR CVMMN!"); // Returns "FREE PIZZA!"
// caesarsCipher("SERR YBIR?"); // Returns "FREE LOVE?"
// caesarsCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // Returns "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

function caesarsCipher(str) {
        return str.split(' ').map(function (s) {
                return s.split('').map(function (x) {
                        let regex1 = /[a-m]/gi
                        let regex2 = /[n-z]/gi
                        if (regex1.test(x) == true) {
                                return String.fromCharCode(x.charCodeAt(0) + 13)
                        } else if (regex2.test(x) == true) {
                                return String.fromCharCode(x.charCodeAt(0) - 13)
                        }
                }).join('')
        }).join(' ')
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 35.) Falsy Bouncer
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Remove all falsy values from an array.  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// bouncer([7, "ate", "", false, 9]);// returns [7, "ate", 9].
// bouncer(["a", "b", "c"]);// returns ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]);// returns [].
// bouncer([1, null, NaN, 2, undefined]);// returns [1, 2].

function bouncer(arr) {
        return arr.filter(function (x) {
                return x;
        });
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 36.) Blackjack Number
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Write a function that generates a random whole number from 1 to 21, and returns "You win!" if the number is 16 or higher, or "You lose!" when the number is 15 or under. Hint(Don't forget to assign the global variable num a value inside the function);

// blackjack(19); // returns "You win!"
// blackjack(10); // returns "You lose!"

function blackjack(num) {
        num = Math.ceil(Math.random() * 21);
        return num >= 16 ? "You win!" : "You lose!"
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 37.) Average First In Array
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Find and return the averages of all sub-arrays in a 2-dimensional array.

// averageFirstInArray([[89, 77, 78],[76, 82, 81],[91, 94, 89]]) => returns ["average 1: 85.33", "average 2: 84.33", "average 3: 82.67"]

function averageFirstInArray(array) {
        let sum1 = 0, sum2 = 0, sum3 = 0
        array.map(function (n) {
                n.map(function (x, i) {
                        i === 0 ? sum1 += x : i === 1 ? sum2 += x : sum3 += x
                })
        })
        sum1 = (sum1 / 3).toFixed(2); sum2 = (sum2 / 3).toFixed(2); sum3 = (sum3 / 3).toFixed(2); array = []
        array.push("average 1: " + sum1, "average 2: " + sum2, "average 3: " + sum3)
        return array
}
// console.log(averageFirstInArray([[89, 77, 78],[76, 82, 81],[91, 94, 89]]))



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 38.) Arithmetic or Geometric
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Takes in an array of numbers and returns 'Arithmetic' if they follow arithmetic pattern (i.e. 2,4,6,8), 'Geometric' if they follow geometric pattern (i.e. 2,6,18,54).  It returns -1 if neither applies.

// arithGeo([2,4,8,16]); // returns Geometric
// arithGeo([2,4,6,8]); // returns Arithmetic
// arithGeo([2,6,18,54]); // returns Geometric
// arithGeo([3,7,34,99]); // returns false

function arithGeo(array) {
        let x = 2;
        array.map(function (s, i) {
                i === 0 ? first = s : i === 1 ? second = s : i === 2 ? third = s : fourth = s
        })
        while (x < 10) {
                if (first + x === second && second + x === third && third + x === fourth) { return "Arithmetic" }
                else if (first * x === second && second * x === third && third * x === fourth) { return "Geometric" }
                else { x++ }
                if (x === 10) { return false }
        }
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 39.) Add Random Characters
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Create a function that inputs random characters in a string and returns it.  This function takes a string, an amount of how many random characters to be inserted, and what the random character is to insert.

// addRandomCharacters("this is a test", 5, "X")
// //returns XthiXXXs iXs a test
// //returns tXXXhis Xis aX test
// //returns XthiXs is aX XtXest
// //returns tXXhiXs iXs aX test
// addRandomCharacters("this is a test", 5, " ");
// //returns thi s i s a test
// //returns t his is a t est


function addRandomCharacters(str, num, char) {
        let x = 0
        let random = () => { return Math.floor(Math.random() * str.length) }
        let insert = () => {
                let array = str.split('')
                array.splice(random(), 0, char)
                str = array.join('')
        }
        while (x < num) {
                insert()
                x++
        }
        return str
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 40.) Acronym
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// A function that returns the first letter of each word in a given string.

// acronym("this Is JUST a teST"); //returns tIJat
// acronym("for your information"); //returns fyi
// acronym("For Your Information"); //returns FYI
// acronym("Ryan James Riesenberer"); //returns RJR

function acronym(str) {
        let newStr = ""
        str.split(' ').map(function (x) {
                x.split('').map(function (y, i) {
                        if (i === 0) { newStr += y }
                })
        })
        return newStr
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 41.) Add Me
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Takes a string and adds the numbers in the string

// addMe('88numbe5rs 3odd7'); //returns 103

function addMe(str) {
        let sum = 0
        let regex = /[a-z]/gi
        str = str.replace(regex, " ")
        str.split(' ').map(function (x) {
                if (x.length > 0) { sum += x * 1 }
        })
        return sum
}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 42.) MUMBLER
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// A "mumble" function that distorts inputted words as follows:

// mumble("abcd") -> "A-Bb-Ccc-Dddd"
// mumble("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function mumble(str) {
        return str.split('').map((x, i) => (x.toUpperCase() + x.toLowerCase().repeat(i))).join('-')
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 43.) GET MIDDLE
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Returns the middle of the string. If string is an odd # of chars it returns the 1 middle letter, if string is an even # of chars it returns the 2 middle chars.
function middle(str) {
        let start = (Math.ceil(str.length / 2 - 1));
        return str.substring(start, str.length % 2 === 0 ? start + 2 : start + 1);
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 44.) Vowel Count
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels.
// The input string will only consist of lower case letters and/or spaces.

// vowelCount("alabama") ---> 4
// vowelCount("california") ---> 5
// vowelCount("hi there kitty cat") ---> 5
// vowelCount("x") ---> 0

function vowelCount(str) {
        return str.replace(/[^aeiou]/gi, "").length
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 45.) Highest and lowest
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// You will be given a string of space separated numbers, and have to return the highest and lowest number.

// highAndLow("1 2 3 4 5"); // return "5 1" 
// highAndLow("1 2 -3 4 5"); // return "5 -3" 
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(str) {
        str = str.split(' ').map(Number);
        return Math.max.apply(0, str) + ' ' + Math.min.apply(0, str);
}



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 46.) Shortest Word
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Given a string of words, return the length of the shortest word(s).
// The string will never be empty and you do not need to account for different data types.

// findShort("lets talk about javascript the best language"); // return 3 
// findShort("i want to travel the world writing code one day"); // return 1
// findShort("cute fat cat"); // return 3

function findShort(str) {
        var arr = str.split(' ');
        var smallest = arr[0];
        for (var i = 0; i < arr.length; i++) {
                if (arr[i].length < smallest.length) {
                        smallest = arr[i];
                }
        }
        return smallest.length;
}





// *******************************************************
// ----********------   PROBLEM SET 2   ----********------
// *******************************************************



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 1.) Division Stringified
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Divide two numbers, round to the nearest integer, and return the answer with correctly placed commas.

// divisionStringified(123456789, 100);// returns '1,234,568'
// divisionStringified(234615346, 1);// returns '234,615,346'
// divisionStringified(234615346, 10);// returns '23,461,535'
// divisionStringified(234615346, 100);// returns '2,346,153'
// divisionStringified(2346153234546, 1);// returns '2,346,153,234,546'

function divisionStringified(num, div) {
        return Math.round(num / div).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 2.) Binary Agents
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Return an English translated sentence of the passed binary string.
    
    //binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111')
    //Return 'Aren't bonfires fun!?'
    
    //binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011  01100001 01101101 01110000 00100001')
    //Return 'I love FreeCodeCamp!'
    
    function binaryAgent(bin) {
        let newStr = ''
        let sum = 0
        bin.split(' ').map(function (set) {
            set.split('').map(function (n, i) {
                if (i === 1 && n == 1) { sum += 64 }
                if (i === 2 && n == 1) { sum += 32 }
                if (i === 3 && n == 1) { sum += 16 }
                if (i === 4 && n == 1) { sum += 8 }
                if (i === 5 && n == 1) { sum += 4 }
                if (i === 6 && n == 1) { sum += 2 }
                if (i === 7 && n == 1) { sum += 1 }
            })
            let add = String.fromCharCode(sum)
            newStr += add
            sum = 0
        })
        return newStr
    }
    
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 3.) Character Counter
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Goes through a string and returns an object with how many times the letter was used.
    
    // characterCounter('abcdefghijkmasdfgasdasdadddassssag');
    //returns {a:7, b:1, c:1, d:7, e:1, f:2, g:3, h:1, i:1, j:1, k:1, m:1, s:7}
    // characterCounter('ryanr');
    //returns {r: 2, y: 1, a: 1, n: 1}
    
    function characterCounter(str) {
        let obj = {}
        str.split('').map(function (x) {
            obj[x] ? obj[x] += 1 : obj[x] = 1
        })
        return obj
    }
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 4.) Confirm the Ending
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Check if a string ends with the given target substring.
    
    // confirmEnding('Bastian', 'n'); // should return true.
    // confirmEnding('Connor', 'n'); // should return false.
    // confirmEnding('Developing software from a specification is easy', 'specification'); // should return false.
    // confirmEnding('He has to give me a new name', 'name'); // should return true.
    // confirmEnding('He has to give me a new name', 'me'); // should return true.
    // confirmEnding('He has to give me a new name', 'na'); // should return false.
    // confirmEnding('If you want to save our world, you must hurry', 'mountain'); // should return false.
    
    
    function confirmEnding(string, end) {
        let stringEnd = string.substring(string.length - end.length, string.length)
        return stringEnd === end ? true : false
    }
    
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 5.) Circle Or Square
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Write a function called circleOrSquare(radius length, side length) that takes 2 parameters: a number representing the radius of a circle in feet, and a number representing the side length of a square in feet. The function will calculate the area of both the circle and the square and return the area of the larger shape in the following format: the <shape> has a larger area: <area as number rounded to no more than 1 decimal place> square feet
    
    // NOTE: Both parameters passed into the function must be positive and must be numbers.  If they are anything else, return the boolean value false.
    
    // circleOrSquare(3,4); // returns 'the circle has a larger area: 28.3 square feet'
    // circleOrSquare(2,4); // returns 'the square has a larger area: 16 square feet'
    // circleOrSquare(5,10); // returns 'the square has a larger area: 100 square feet'
    // circleOrSquare(10,12); // returns 'the circle has a larger area: 314.2 square feet'
    
    function circleOrSquare(radius, side) {
        if (typeof radius !== 'number' || typeof side !== 'number' || radius < 0 || side < 0) {
            return false
        }
        let circle = ((radius * radius) * Math.PI).toFixed(1)
        let square = (side * side).toFixed(1)
        return circle > square ? "the circle has a larger area: " + circle + " square feet" : "the square has a larger area: " + square + " square feet"
    }
    
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 6.) Multiples of 3 or 5
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    // If the number is a multiple of both 3 and 5, only count it once.
    
    
    function multiples(num) {
        let sum = 0;
        for (i = 1; i < num; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i
            }
        }
        return sum;
    }
    // console.log(multiples(10)) /// return 23
    // console.log(multiples(20)) /// return 78
    // console.log(multiples(200)) /// return 9168
    
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 7.) Find the odd one
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Given an array, find the int that appears an odd number of times.
    // There will always be only one integer that appears an odd number of times.
    
    // oddOne([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) /// return 5
    // oddOne([1,1,2,-2,5,2,4,4,-1,-2,5]) /// return -1
    // oddOne([1,1,1,1,1,1,10,1,1,1,1]) /// return 10
    
    function oddOne(arr) {
        arr = arr.sort();
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                delete arr[i]
                delete arr[i + 1]
            }
        }
        for (j = 0; j < arr.length; j++) {
            if (typeof arr[j] === 'number') {
                return arr[j]
            }
        }
    }
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 8.) Distance From Middle
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Write a function that takes a word and letter and finds the distance of the first instance of that letter from the center of the string
    
    // distanceFromMiddle('b', 'Rabbit');// returns 0
    // distanceFromMiddle('a', 'aaaaa');// returns 2
    // distanceFromMiddle('u', 'Bunny');// returns 1
    // distanceFromMiddle('1', '987654321');// returns 4
    // distanceFromMiddle('1', '123456789');// returns 4
    // distanceFromMiddle('R', 'Ryan is awsome');// returns 6
    
    function distanceFromMiddle(char, str) {
        let middle = (Math.ceil(str.length / 2 - 1));
        for (i = 0; i < str.length; i++) {
            if (str[i] === char) {
                let index = str.indexOf(str[i])
                return i === middle ? 0 : (middle - index > 0 ? middle - index : index - middle)
            }
        }
    }
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 9.) The Supermarket Line
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // There is a line for self-checkout stands at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
    // The function has two input variables:
    // customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
    // n: a positive integer, the number of checkout stands
    // The function should return an integer, the total time required for all customers to finish checking out.
    
    // lineTime([5,3,4], 1) /// return 12
    // lineTime([10,2,3,6], 2) /// return 11
    // lineTime([2,3,10], 3) /// return 10
    
    function lineTime(customers, n) {
        let array = new Array(n).fill(0);
        for (let num of customers) {
            let result = array.indexOf(Math.min(...array));
            array[result] += num;
        }
        return Math.max(...array);
    }
    
    
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // 10.) Vowel Reverser
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    // Reverse only vowels. Write a function that takes a string as input and returns a string with only the vowels reversed. Vowels are a,e,i,o,u.
    
    // reverseVowels("hello") // -> returns "holle"
    // reverseVowels("aeiou") // -> returns "uoiea"
    // reverseVowels("declaration") // -> returns "doclirataen"
    // reverseVowels('broke bait tail'); //returns 'brika biat teol'
    // reverseVowels('Having a habit looking forward'); // returns 'Havong i hobot liakang firward'
    
    
    
    function reverseVowels(str) {
        return str.split(/([aeiou])/i).map((x, i, arr) => i % 2 ? arr[arr.length - 1 - i] : x).join('')
    }
