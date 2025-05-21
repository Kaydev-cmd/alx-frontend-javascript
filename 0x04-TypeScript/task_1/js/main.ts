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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("Morgan", "Stanley"));

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
