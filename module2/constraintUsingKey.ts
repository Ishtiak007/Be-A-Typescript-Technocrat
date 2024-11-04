{
  //  generic constraint with key operator
  type Vechicle = {
    bike: string;
    car: string;
    ship: string;
  };
  //   normally
  type Owner = "bike" | "car" | "ship";

  //   constraint using key
  type Owner2 = keyof Vechicle;

  const person1: Owner = "car";
  const person2: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Ishtiak Ahmed",
    age: 23,
    address: "kg",
  };
  //   console.log(user.address);
  //   console.log(user["name"]);
  const resultOfObj = getPropertyValue(user, "address");
  console.log(resultOfObj);
}
