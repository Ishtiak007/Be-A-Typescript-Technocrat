{
  //abstraction
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  class Car implements Vehicle1 {
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

  const tyotaCar = new Car();
  tyotaCar.startEngine();
}
