function add(a, b) {
    // total variable cannot access outside this function block
    // it can be used inside from both for loop and if condition that is written below
    const total = a + b;
    let sum = 0;
    for(let i = 0; i< a; i++) {
        // number variable cannot access outside this for loop block
        // it can be used inside from if condition that is written below
        const number = i;
        sum += number;
        if(true) {
            const result = a+b; // result variable cannot access outside this if block
        }
    }
    return [total, sum];
}
console.log(hi);
// console.log(a, b);
// console.log(sum);
add();