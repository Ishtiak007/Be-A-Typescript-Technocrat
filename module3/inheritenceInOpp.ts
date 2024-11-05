// {
//   // oop- inheritence

//   class Person {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//       this.name = name;
//       this.age = age;
//       this.address = address;
//     }
//     // getSleep(numOfHours: number) {
//     //   console.log(
//     //     `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He sleeps : ${numOfHours}`
//     //   );
//     // }
//   }

//   class Student extends Person {
//     constructor(name: string, age: number, address: string) {
//       super(name, age, address);
//     }
//     getSleep(numOfHours: number) {
//       console.log(
//         `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He sleeps : ${numOfHours}`
//       );
//     }
//   }
//   class Teacher extends Person {
//     designation: string;
//     constructor(
//       name: string,
//       age: number,
//       address: string,
//       designation: string
//     ) {
//       super(name, age, address);
//       this.designation = designation;
//     }
//     takeClass(numOfClass: number) {
//       console.log(
//         `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He will take class : ${numOfClass}`
//       );
//     }
//   }

//   const student1 = new Student("Ishtiak", 21, "UK Kurigram");
//   student1.getSleep(20);
//   const teacher1 = new Teacher("Jhonkar Mahbub", 41, "Texas", "Professor");
//   teacher1.takeClass(7);
// }
{
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      {
        super(name, age, address);
      }
    }
    getSleep(hour: number) {
      console.log(
        `${this.name} sleeps ${hour} h and his age${this.age} ; address: ${this.address}`
      );
    }
  }
  class Teacher extends Person {
    dasignation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      dasignation: string
    ) {
      {
        super(name, age, address);
      }
      this.dasignation = dasignation;
    }
    takenClass(classHour: number) {
      console.log(
        `${this.name} sir will take class ${classHour} h and his age: ${this.age} ----dasignation is ${this.dasignation}`
      );
    }
  }

  const student = new Student("Ishtiak", 23, "Dhaka");
  const teacher = new Teacher("Dilip", 30, "Kurigram", "Professor");
  student.getSleep(19);
  teacher.takenClass(23);
}
