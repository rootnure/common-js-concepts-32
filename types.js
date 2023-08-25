/**
 * // strongly typed language (other languages)
 * // must declare type while initialize
 * int a = 5;
 * float b = 3.501;
 * string c = 'halum malum galum';
 * bool d = true;
 * object student = { name: 'amir', job: 'gorib farmer' }
 * int[] numbers = [12, 45, 71];
 * string[] friends = [ 'Abul', 'Babul', 'Kabul' ];
 */



/**
 * // dynamic type language (JavaScript)
 * // no need to declare type of variable
 */

// primitive type
const a = 5; // number
const b = 3.501; // number
const c = 'Ki are korbo ekhon'; // string
const d = true; // boolean

// non-primitive type
const student = { name: 'amir', job: 'gorib farmer', age: 37 } // object
const numbers = [12, 45, 71]; // array
const peoples = ['Abul', 'Babul', 'Kabul']; // array

// console.log(typeof a, typeof b, typeof c, typeof d, typeof student, typeof numbers, typeof peoples); // number number string boolean object object object


// ====================================================================================


/* call by value */
// ===================== number, string or boolean =======================
let x = 5;
let y = x;
console.log(x, y); // 5 5
y = 7; // only y value will be changed
console.log(x, y); // 5 7


/* call by reference */
// ================================ object ==============================
let p = { job: 'web developer' };
let q = p; // reference will also assigned

console.log(p, q); // { job: 'web developer' } { job: 'web developer' }

q.job = 'front end'; // Updating inside non-primitive data, both variable will updated as reference will effect here
console.log(p, q); //{ job: 'front end' } { job: 'front end' }

// q = { job: 'Back end' }; // reassign won't effect the reference. only q variable value will update
console.log(p, q); // { job: 'web developer' } { job: 'Back end' }


// ============================== array ================================
let names = ['Rafi', 'Asif'];
let friends = names; // reference will also assigned

console.log(names, friends); // [ 'Rafi', 'Asif' ] [ 'Rafi', 'Asif' ]

friends[1] = 'Joy'; // Updating inside non-primitive data, both variable will updated as reference will effect here
console.log(names, friends); // [ 'Rafi', 'Joy' ] [ 'Rafi', 'Joy' ]

friends = ['Leo', 'John']; // reassign won't effect the reference. only friends variable value will update
console.log(names, friends); // [ 'Rafi', 'Joy' ] [ 'Leo', 'John' ]