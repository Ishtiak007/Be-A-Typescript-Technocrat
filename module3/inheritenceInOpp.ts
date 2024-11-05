{
  // oop- inheritence

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    // getSleep(numOfHours: number) {
    //   console.log(
    //     `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He sleeps : ${numOfHours}`
    //   );
    // }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getSleep(numOfHours: number) {
      console.log(
        `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He sleeps : ${numOfHours}`
      );
    }
  }
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(
        `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He will take class : ${numOfClass}`
      );
    }
  }

  const student1 = new Student("Ishtiak", 21, "UK Kurigram");
  student1.getSleep(20);
  const teacher1 = new Teacher("Jhonkar Mahbub", 41, "Texas", "Professor");
  teacher1.takeClass(7);
}
