function addUser(user) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const usernameCell = document.createElement("td");
  const emailCell = document.createElement("td");
  const addressCell = document.createElement("td");
  const phoneCell = document.createElement("td");
  const companyCell = document.createElement("td");

  nameCell.textContent = user.name;
  usernameCell.textContent = user.username;
  emailCell.textContent = user.email;
  addressCell.textContent = `${user.address.street}, ${user.address.city}`;
  phoneCell.textContent = user.phone;
  companyCell.textContent = user.company.name;

  row.appendChild(nameCell);
  row.appendChild(usernameCell);
  row.appendChild(emailCell);
  row.appendChild(addressCell);
  row.appendChild(phoneCell);
  row.appendChild(companyCell);

  const tableBody = document.querySelector("tbody");
  tableBody.appendChild(row);
}

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  for(let u of users) {
    addUser(u);
  }
}

fetchUsers();
