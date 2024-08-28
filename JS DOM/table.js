const btn = document.getElementById("add");
const nameInput = document.getElementById("name");
const profInput = document.getElementById("profession");

btn.addEventListener("click", function () {
    const name = nameInput.value;
    const profession = profInput.value;
    
    nameInput.value = "";
    profInput.value = "";
    
    const tableBody = document.getElementById("table-body")
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const profCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    
    nameCell.textContent = name;
    profCell.textContent = profession;

    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        tableBody.removeChild(row)
    })

    deleteCell.appendChild(deleteBtn);

    row.appendChild(nameCell)
    row.appendChild(profCell)
    row.appendChild(deleteCell)

    tableBody.appendChild(row);
})