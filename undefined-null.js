/**
 * // 8 ways to get undefined
 * 1. variable that is not initialized will give undefined
 * 2. function with no return will give undefined
 * 3. parameter that is not passed will be undefined
 * 4. if function just return without any value will give undefined
 * 5. accessing property that doesn't exists inside an object will give undefined
 * 6. accessing array elements outside the index range will give undefined
 * 7. accessing array element that is deleted using delete keyword will give undefined (should not do it. use splice instead)
 * 8. assigning undefined directly to a variable and then accessing that variable value will give undefined (should not do it. use null instead)
 * 
 * // typeof undefined → undefined
 */

/**
 * // null
 * 1. If a value is not present at the moment but may update in future then assign that variable / property value as null
 * 2. typeof null → object
 */


// #1
let notInitialized;
console.log(notInitialized) // undefined

// #2
function noReturn(a, b) {
    const total = a + b;
}
console.log(noReturn(5, 7)); // undefined

// #3
function notProvidedParameter(a, b, c, d) {
    console.log(a, b, c, d); // c & d will be undefined
}
notProvidedParameter(5, 2)

// #4
function returnButNoValue(a) {
    if(a < 0) {
        return;
    }
    return a * 5;
}
console.log(returnButNoValue(-5)) // undefined

// #5
const myObj = { name: 'Safayed', age: 25 };
console.log(myObj.job); // undefined

// #6
const numbers = [98, 79, 65, 16];
console.log(numbers[5]); // undefined

// #7
const nums = [63, 54, 19, 68];
delete nums[1];
console.log(nums[1]); // undefined

// #8
const assignDirectly = undefined;
console.log(assignDirectly); // undefined