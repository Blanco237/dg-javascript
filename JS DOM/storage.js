
const savedStuff = localStorage.getItem("stuff");
if(savedStuff) {
    todoInput.value = savedStuff;
}

todoInput.addEventListener("keydown", (ev) => {
    const data = todoInput.value;
    localStorage.setItem('stuff', data + ev.key);
})