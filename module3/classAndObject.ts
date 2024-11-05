{
  //opp- class
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = satisfies;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(
        `The ${this.name} says ${this.sound} and its species is : ${this.species}`
      );
    }
  }
  const dog = new Animal("German Shepard", "Dog", "Ghew ghew ghew");
  const cat = new Animal("Persian", "cat", "meo meo meo");

  cat.makeSound();
  dog.makeSound();

  //   new practices
  class Person {
    constructor(
      public name: string,
      public height: number,
      public academicPosition: string,
      public campusName: string
    ) {
      this.height = height;
      this.academicPosition = academicPosition;
      this.campusName = campusName;
    }
    personIdentity() {
      console.log(
        `This is ${this.name} , height is ${this.height} , academic Position ${this.academicPosition} and campus name is ${this.campusName}`
      );
    }
  }

  const person1 = new Person("Ishtiak", 5.8, "cse 3rd year", "RU");
  person1.personIdentity();
}
