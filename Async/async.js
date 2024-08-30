// setTimeout
// function logStuff(callback) {
//   setTimeout(function () {
//     console.log("Line 1");
//     console.log("Line 2");
//     callback()
//   }, 1500);
// }

// function logOtherStuff() {
//   console.log("Line 3");
//   console.log("Line 4");
//   console.log("Line 5");
// }

// function logSomeOtherStuff() {
//     console.log("Line blue")
//     console.log("Line pink")
//     console.log("Line red")
// }

// function logEvenMoreStuff() {
//     console.log("Line x")
//     console.log("Line y")
//     console.log("Line z")
// }

// logStuff(logEvenMoreStuff)

function randomChoice(onSuccess, onFailure) {
    const val = Math.floor(Math.random() * 10)
    const choice = Boolean(val % 2);
    if(choice) {
        onSuccess(val);
    }
    else {
        onFailure(val);
    }
}

function success (v) {
    console.log("Choice was SUCCESS", v)
}

function failure (v) {
    console.log("Choice was FAILURE", v)
}

randomChoice(success, failure);