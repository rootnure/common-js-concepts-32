// always use ===
// equal comparison doesn't work for non-primitive data

/* primitive type */
const first = 2;
const second = '2';
if (first === second) { // check both value and value type
    console.log('values are equal and same type');
}
else if (first == second) { // check only value
    console.log('values are equal but not same type');
}
else {
    console.log('values are not equal');
}

/* non primitive type */
const value1 = [];
const value2 = [];
if (value1 === value2) { // won't work for non-primitive data
    console.log('values are equal and same type');
}
else if (value1 == value2) { // won't work for non-primitive data
    console.log('values are equal but not same type');
}
else {
    console.log('values are not equal');
}
