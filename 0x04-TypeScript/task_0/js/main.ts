interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Eben",
  lastName: "Kwame",
  age: 22,
  location: "Accra"
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Mensah",
  age: 21,
  location: "Cape Coast"
};

const studentsList: Student[] = [student1, student2];

// Add styles
const style = document.createElement("style");
style.textContent = `
  table {
    border-collapse: collapse;
    width: 70%;
    margin: 20px auto;
    font-family: Arial, sans-serif;
  }
  th, td {
    border: 1px solid #333;
    padding: 8px 12px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
`;
document.head.appendChild(style);

// Table header
const table = document.createElement("table");
const headerRow = document.createElement("tr");

["First Name", "Last Name", "Age", "Location"].forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});

table.appendChild(headerRow);

// Student rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = student.lastName;

  const ageCell = document.createElement("td");
  ageCell.textContent = student.age.toString();

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
