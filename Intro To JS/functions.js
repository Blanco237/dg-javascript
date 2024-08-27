
function sayHello() {
    return "Hello";
}

const message = sayHello(); 
console.log(`Received: ${message}`)

function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}


// let personName = prompt("Enter your name");
// sayHelloTo(personName)

function printNumbersFrom1To10() {
    for(let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

// printNumbersFrom1To10();

// printNumbersFrom1ToY(5)

function printNumbersFrom1ToY(y) {
    for(let i = 1; i <= y; i++) {
        console.log(i)
    }
}

// printNumbersFrom1ToY(3)

// printNumbersFromXToY(1,5)

function printNumbersFromXToY(x, y) {
    for(let i = x; i <= y; i++) {
        console.log(i)
    }
}

function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(2,23))

// 1. Create a function to verify the age of a person. If the age is greater than 18, then return "Adult", else return "Minor"

const verifyAge = function (age) {
    if(age >= 18) {
        return "Adult"
    }
    return "Minor"
}

// 2. Write a function to compute the area of a rectangle.
const areaOfRectangle = (length, width) => {
    const area = length * width;
    return area;
}

// 3. Write a function that will convert the temperature in celcius to the temperature in Fahrenheit. The formula to convert temperature is (celsius * 9/5) + 32
// function convertCelcius(celsius){
//     const fahr = (celsius * 9/5) + 32;
//     return fahr
// }

// console.log(convertCelcius("blanco"));


// 4. Using the function to compute the area of a rectangle above, write a function to compute the area of a square.

function areaOfSquare(side) {
    const area = areaOfRectangle(side, side);
    return area;
}