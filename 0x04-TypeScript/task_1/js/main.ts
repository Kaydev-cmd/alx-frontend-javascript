interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
  yearsOfExperience: 5,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Jane",
  fullTimeEmployee: true,
  lastName: "Smith",
  location: "New York",
  numberOfReports: 10,
  yearsOfExperience: 15,
};

console.log(director1);
