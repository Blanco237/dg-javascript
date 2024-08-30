// function getPromise() {
//     return new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve(42)
//         }, 2000)
//     })
// }

// const valPromise = getPromise();

// valPromise.then(function (num) {
//     console.log(`Received from Promise: ${num}`)
// })

// console.log("Promise taking forever")
// console.log("MENNNNNNN!!!!!!")

const userPromise = fetch("https://jsonplaceholder.typicode.com/users");

const jsonPromise = userPromise.then(function (res) {
  return res.json();
});

// jsonPromise.then((data) => {
//   console.log(data);
// });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
//   .then((data) => {
//     console.log(data);
//   });


async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    console.log(data);
}

fetchUsers();


console.log("NOt blocked by fetch")