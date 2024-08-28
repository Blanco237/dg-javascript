// 1. Write a simple JavaScript function to join all elements of an array into a string.
function joinArrayToString(arr) {
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     const str = arr[i];
//     res = res + str;
//     if(i !== arr.length - 1) {
//         res = res + ',';
//     }
//   }
//   return res;

    return arr.join(" ")
}

// console.log(joinArrayToString(["Red", "Green", "White", "Black"]))

// 2. Write a JavaScript function that accepts an array of numbers as input and converts all positive numbers to negative numbers and negative numbers to positive numbers.

function switchSigns(arr) {
    console.log("Received", arr)
    return arr.map((num) => {
        if(num < 0) {
            return num * -1
        }
        return num;
    })
}

// console.log(switchSigns([ -3, 8, 5, -4, 3, -1 ]))

// 3. Write a Javascript function that recieves an array of numbers and determines whether the number of 3s is greater than the number of 5s

function moreThrees(arr) {
    let threes = 0;
    let fives = 0;
    for(let val of arr) {
        if(val === 3) {
            threes++
        } else if ( val === 5) {
            fives++
        }
    }
    return (threes > fives);
}

// console.log(moreThrees([3, 5, 3, 5, 3, 5, 5, 5, 3, 3, 3, 3, 3, 3]))


// 5. Write a JavaScript function to remove all the falsy values from an array
function removeFalsy(arr) {
    // let cleaned = [];
    // for(let val of arr) {
    //     if(Boolean(val) !== false) {
    //         cleaned.push(val)
    //     }
    // }
    // return cleaned;
    return arr.filter((n) => {
        return Boolean(n)
    })
}

console.log(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))