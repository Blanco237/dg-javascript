/* ARITHMETIC OPERATORS */
const PI = 3.1514954;
const MAX = 100;
let neg = -12;

console.log(MAX + 1);
console.log(MAX - 1);
console.log(MAX / 5);
console.log(MAX * 5);
console.log(MAX % 5);

console.log('============')
console.log(`Original: ${neg}`); 
neg++;
console.log(`Incremented: ${neg}`); 
neg = neg + 1;
console.log(`Incremented: ${neg}`); 
neg--;
console.log(`Decremented: ${neg}`); 
neg--;
console.log(`Decremented: ${neg}`); 

console.log('============')
const L = "blanco";
const W = 3;

const area = L * W;
console.log(area)

/* CONCATENATION OPERATOR */

const firstName = "John"
const lastName = "Doe"

const fullName = firstName + " " + lastName
console.log(fullName)

const result =  5 + "5";
console.log(result)

/* COMPARISON OPERATOR */

let res = 4 === "4";
console.log(`Comparison result: ${res}`)

/* LOGICAL OPERATORS */
const val = 5;
res = 5 >= 3 && 5 < 27;
console.log(`Comparison result: ${res}`)
res = 5 == 0 || 5 < 27;
console.log(`Comparison result: ${res}`)
res = true;
res = !res;
console.log(`Comparison result: ${res}`)