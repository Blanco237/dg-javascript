const todoInput = document.getElementById("todo");

todoInput.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    const data = todoInput.value;
    todoInput.value = "";
    const liElem = document.createElement("li");
    liElem.innerHTML = `<label>
          <input type="checkbox" name="${data}" />
          <span>${data}</span>
        </label>`;
    


    const listBody = document.getElementById("list-body");
    listBody.appendChild(liElem);
  }
});
