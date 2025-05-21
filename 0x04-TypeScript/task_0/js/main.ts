interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "Alexis",
  lastName: "Smith",
  age: 23,
  location: "New York",
};

const secondStudent: Student = {
  firstName: "Garry",
  lastName: "Nagamoto",
  age: 26,
  location: "Tokyo",
};

const studentList: Student[] = [firstStudent, secondStudent];

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "100%";

const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
firstNameHeader.style.border = "1px solid #ccc";
firstNameHeader.style.padding = "8px";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid #ccc";
locationHeader.style.padding = "8px";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid #ccc";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid #ccc";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
