
// SELECTING FROM THE DOM
//// 1. getElementByID

// const userEmailInput = document.getElementById("uemail");
// userEmailInput.value = "asongrandywork@gmail.com"

// const pageTitle = document.getElementById("title");
// pageTitle.textContent = "Modified with Javascri"

//// 2. getElementsByClassName
const allPrimaryBtns = document.getElementsByClassName("primary_button")
// console.log(allPrimaryBtns);
for(let i = 0; i < allPrimaryBtns.length; i++) {
    const btn = allPrimaryBtns[i];
    btn.textContent = "PRIMARY BUTTONS MODIFIED!!!1"
}
//// 3. getElementsByTagname
const allBtns = document.getElementsByTagName("button")
// console.log(allBtns);

//// 3. querySelector
const navLink = document.querySelector(".navlist > li > a")
// console.log(navLink);
navLink.textContent = "Take me to Twitter"
navLink.href = "https://x.com"
navLink.style.color = "purple"

const pageLink = "http://127.0.0.1:5500/JS%20DOM/forms.html";

const thatBtn = document.getElementById("menu_btn");

thatBtn.addEventListener("click", function () {
    thatBtn.style.background = "green"
    const title = document.getElementById("btitle");
    title.textContent = "Something New"
})