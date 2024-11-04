{
  // conditional type
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  //   checking car | bike | ship
  type DubaiSheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof DubaiSheikh ? true : false;
  type HavingBike = CheckVehicle<"bike">;
  type HavingCar = CheckVehicle<"car">;
  type HavingShip = CheckVehicle<"ship">;
  type HavingPlane = CheckVehicle<"plane">;

  type HavingTractor = CheckVehicle<"tractor">;
}
