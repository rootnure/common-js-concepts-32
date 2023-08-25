// arguments: array like object that is local to a function (can't access outside the function)
function sum (a, b, c) {
    // console.log(arguments); // [Arguments] { '0': 36, '1': 34, '2': 53, '3': 84, '4': 90 }
    // console.log(arguments[4]); // 90
    // console.log(typeof arguments); // object
    // arguments.push(48); // TypeError: arguments.push is not a function
    const args = [...arguments]; // convert to array
    // console.log(args); // [ 36, 34, 53, 84, 90 ]
    
    return a + b + c;
};
// console.log(arguments); // cannot access outside the function

const total = sum(36, 34, 53, 84, 90);
// console.log(total);
// console.log(typeof sum);
const sumLength = sum.length; // returns how many parameter is declared when initialized that function
console.log(sumLength); // 3