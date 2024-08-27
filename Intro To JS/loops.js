// FOR LOOP
// for (let N = 1; N <= 5; N++) {
//   console.log(`Current value: ${N}`);
// }

// for(let inp = ""; inp != "."; inp = prompt("Enter something")) {
//     console.log(`User entered: ${inp}`)
// }

// let inp = "";
// for( ; ; ) {
//     if(inp === ".") {
//         break
//     }
//     console.log(`User entered [v2]: ${inp}`)
//     inp = prompt("Come again?")
// }

// let inp = "";
// while (inp != ".") {
//   console.log(`User entered [v3]: ${inp}`);
//   inp = prompt("Come again?");
// }

function isEven(num){
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

const res = isEven(9);
console.log(res);

const end = Number(prompt("Enter Stopping Point"));
let even = 0;

for(let N = 1; N <= end; N++) {
    if(isEven(N)) {
        even++
    }
}

console.log(`Number of even numbers from 1 to ${end} = ${even}`)


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. Write a program to compute the sum of the first 10 natural numbers.
function add(a, b) {
    let result = a + b;
    return result;
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = add(sum, i);
}
console.log(`Output[2]: ${sum}`)

// 3. Write a program to display sum of natural numbers up to a user defined stopping point.
// const end = Number(prompt("Enter Stopping Point"));
// sum = 0;
// for (let i = 1; i <= end; i++) {
//     sum = sum + i;
// }
// console.log(`Output[3]: ${sum}`)

// 4. Write a program that asks the user to enter two numbers: the lower and
// upper limits of a sequence. Compute the sum and average of all numbers
// between these two limits.

// const start = Number(prompt("Enter Starting Point"));
// const end = Number(prompt("Enter Stopping Point"));
// sum = 0;
// let total = (end + 1) - start;
// for (let i = start; i <= end; i++) {
//     sum = sum + i;
//     // total++;
// }
// const average = sum/total
// console.log(`Output[4]: Sum ${sum}`)
// console.log(`Output[4]: Average ${average}`)