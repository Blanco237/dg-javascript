const emailInp = document.getElementById("email")
const passInp = document.getElementById("pass")
const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", ( ) => {
    const email = emailInp.value;
    const password = passInp.value;

    localStorage.setItem('email', email);
    // localStorage.setItem('password', password)

    window.location = "http://127.0.0.1:5500/JS%20DOM/Auth-demo/dashboard.html";
})

localStorage.setItem("something", "some")

// JSON.stringify and JSON.parse