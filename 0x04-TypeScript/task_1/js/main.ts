// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra properties
}

// 2. Use the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

// 3. Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 4. Use the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 5. Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 6. Interface for the class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 7. Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

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

// 8. Example usage
const student = new StudentClass("Eben", "Mensah");
console.log(student.displayName());    // Output: Eben
console.log(student.workOnHomework()); // Output: Currently working
