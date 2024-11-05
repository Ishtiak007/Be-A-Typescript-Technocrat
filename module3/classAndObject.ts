{
  //opp- class
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, satisfies: string, sound: string) {
      this.name = name;
      this.species = satisfies;
      this.sound = sound;
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
}
