const addBtn = document.getElementById("add-btn");
const input = document.getElementById("item");

function addItem () {
    const itemInput = document.getElementById("item");
    const content = itemInput.value;
  
    if (content.length < 3) {
      return;
    }
  
    const newItem = document.createElement("li");
  
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    newItem.textContent = content;
    newItem.style.fontWeight = "bold";
    newItem.appendChild(btn);
  
    btn.addEventListener("click", function () {
      const list = document.querySelector("ul.items");
      list.removeChild(newItem);
    });
  
    itemInput.value = "";
  
    const itemList = document.querySelector(".items");
    itemList.appendChild(newItem);
}

addBtn.addEventListener("click", addItem);

input.addEventListener("keypress", function (ev) {
  if (ev.key === "Enter") {
    addItem()
  }
});
