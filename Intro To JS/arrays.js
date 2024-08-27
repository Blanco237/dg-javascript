function getStringFromArray(arr) {
    let str = "";
    for(let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]},`
    }
    return str;
}

// console.log(getStringFromArray(["Red", "Green", "White", "Black"]))

// 2. Write a JavaScript function that accepts an array of numbers as input and converts all positive numbers to negative numbers and negative numbers to positive numbers.
function switchSigns(arr) {
    let switchedArr = arr.map((num) => {
        return num * -1
    })
    return switchedArr;
}

console.log(switchSigns([ -3, 8, 5, -4, 3, -1 ]))