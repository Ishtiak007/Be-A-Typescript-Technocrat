{
  //abstraction
  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    tesst() {
      console.log(`I am just testing`);
    }
  }

  const tyotaCar = new Car1();
  tyotaCar.startEngine();

  // abstract class ------for idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
      console.log(`I am just testing`);
    }
  }

  class Tpyota extends Car2 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stoping the car engine");
    }
    move(): void {
      console.log("I am moving the car engine");
    }
  }

  //   const hondacar = new Car2();
  //   hondacar.startEngine();
}
