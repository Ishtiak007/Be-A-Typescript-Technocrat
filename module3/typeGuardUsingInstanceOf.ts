{
  //Type guard using instance of
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log("I am meowing");
    }
  }

  //   smart way te handle korar jonno chaile amra function use korte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Jack bhaiyaa", "Dog");
  const cat = new Cat("Oggy bhaiyaa", "Cat");

  getAnimal(cat);
}
// practice...............................
// {
//   class Animal2 {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//       this.name = name;
//       this.species = species;
//     }
//     makeSound2() {
//       console.log("I am sounding Tuuuuuuuuuu");
//     }
//   }
//   class Dog2 extends Animal2 {
//     constructor(name: string, species: string) {
//       {
//         super(name, species);
//       }
//     }
//     makeBark2() {
//       console.log("I am dog and I am barking ghuoooo gheoooo");
//     }
//   }
//   class Cat2 extends Animal2 {
//     constructor(name: string, species: string) {
//       {
//         super(name, species);
//       }
//     }
//     makeMeow2() {
//       console.log("I am a cat and I can meowing meoooo meoooo");
//     }
//   }

//   const getAnimal2 = (animal: Animal2) => {
//     if (animal instanceof Dog2) {
//       animal.makeBark2();
//     } else if (animal instanceof Cat2) {
//       animal.makeMeow2();
//     } else {
//       animal.makeSound2();
//     }
//   };
//   const dog2 = new Dog2("Dog bhai", "Dog");
//   const cat2 = new Cat2("Cat bhai", "Cat");
//   getAnimal2(dog2);
// }
