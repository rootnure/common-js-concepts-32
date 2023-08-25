/**
 * // Truthy value:
 * 1. true
 * 2. any number except 0
 * 3. non empty string ('a', 'abbas', ' ', '0', 'null', 'undefined')
 * 4. array (both empty and non empty array)
 * 5. object (both empty and non empty array)
 * 
 * // Falsy value:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */

// let x = true; // true is truthy
// let x = false; // false is falsy
// let x = 5; // non 0 (zero) number is truthy
// let x = 0; // number 0 is falsy
// let x = 'a'; // string is truthy
// let x = '0'; // string 0 (zero) is truthy
// let x = ''; // empty string is falsy 
// let x = ' '; // white space string is truthy
// let x = 'null'; // non empty string is truthy
// let x = 'undefined'; // non empty string is truthy
// let x = []; // empty array is truthy
// let x = [9]; // non empty array is truthy
// let x = {}; // empty object is truthy
// let x = {val: 0}; // non empty object is truthy
// let x; // undefined is falsy
let x = null; // null is falsy
if (x) {
    console.log(x, 'is truthy');
} else {
    console.log(x, 'is falsy');
}


/* OPTIONAL */

// Reverse truthy or falsy value → use  !  sign before any truthy or falsy value to reverse truthy ⇔ falsy

// Check falsy value → use  !  (single bang) sign before any value to check falsy (converts any falsy value to false)
let y = "";
if (!y) {
    console.log(y, 'is falsy');
} else {
    console.log(y, 'is truthy');
}

// Check truthy value → use  !!  (double bang) sign before any value to check truthy (converts any truthy value to true)
let z = 0;
if (!!z) {
    console.log(z, 'is truthy');
} else {
    console.log(z, 'is falsy');
}
