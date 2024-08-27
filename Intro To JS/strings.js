const someStr =
  'This is some random string. Someone said the other day"Javascript is cool"';
const str = "This";

// console.log(str[2])

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  console.log(char);
}

// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   const char = str[i];
//   // console.log(char)
//   reversed = reversed + char;
// }
// console.log("Reversed ", reversed);

function reverseString(inputStr) {
  let reversed = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    const char = inputStr[i];
    reversed = reversed + char;
  }
  return reversed;
}

function isPalindrome(str) {
    const reverse = reverseString(str);
    if(reverse.toLowerCase() === str.toLowerCase()) {
        return true
    }
    return false
}


const text = "Madame"
console.log(text + " Koi Koi")