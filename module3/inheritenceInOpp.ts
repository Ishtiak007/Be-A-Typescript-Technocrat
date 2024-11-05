{
  // oop- inheritence
  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(
        `Name : ${this.name}--- Age : ${this.age}--- Address : ${this.address} and He sleeps : ${numOfHours}`
      );
    }
  }
  const student1 = new Student("Ishtiak", 21, "UK Kurigram");
  student1.getSleep(20);
}
