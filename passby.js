// primitive types are passed by value
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 10;
    return a * b;
}

console.log(num1);
const output = multiply(num1, num2);
console.log(num1);


// object and array are passed by reference
let student1 = {name: 'Jalil', partner: 'barsha'};
let student2 = {name: 'raj', partner: 'pori'};

function makeMovie(couple1, couple2) {
    couple1.name = 'Ananta';
    couple2.partner = 'moni';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);