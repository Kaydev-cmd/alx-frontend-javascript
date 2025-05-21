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
