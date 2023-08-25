// print5() can be used before initialization because it it declared using function keyword
print5();
console.log(print10);
// cannot use print10() function expression before initialization even if it was declared using var, as only declaration part (var print10;) is hoisted the value which is a function is not hoisted here
// print10(); // will generate TypeError: print10 is not a function

// cannot use print0() as it is declared using const and for this it is not hoisted.
// print0(); // will give ReferenceError: Cannot access 'print0' before initialization

function add(a, b) {
    const total = a + b;
    for(var i = 0; i < total; i++) {
        console.log('inside add() --> for loop', i);
    }
    // initialization is hoisted so i can be used outside for loop within the function
    console.log(i);
}

add(3, 2);

function print5() {
    console.log(5);
}

var print10 = function() {
    console.log('insideprint10', 10);
}

const print0 = function() {
    console.log(0);
}