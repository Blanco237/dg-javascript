const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
    
    const itemInput = document.getElementById("item");
    const content = itemInput.value;

    if(content.length < 3) {
        return;
    }

    const newItem = document.createElement("li");
    
    newItem.textContent = content;
    newItem.style.fontWeight = 'bold';
    
    itemInput.value = "";

    const itemList = document.querySelector(".items");
    itemList.appendChild(newItem);
})