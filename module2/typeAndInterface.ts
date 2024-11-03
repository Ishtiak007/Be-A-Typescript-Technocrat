{
  //normally

  type UserTypeNormally = {
    name: string;
    age: number;
    address: string;
  };
  const user1: UserTypeNormally = {
    name: "Ishtiak Ahmed",
    age: 17,
    address: "Dhap lalkuthi, Rangpur",
  };
  console.log({ user1 });

  //interface..............................Object
  interface UserTypeInterface {
    name: string;
    age: number;
    id: number;
    address: string;
    married: boolean;
  }
  const user2: UserTypeInterface = {
    name: "Ishtiak Ahmed IA",
    age: 21,
    id: 1007,
    address: "Dhap, katki para",
    married: false,
  };
  console.log({ user2 });

  //using normally
  type UserWithRole = UserTypeInterface & { role: string };
  const userWithRole: UserWithRole = {
    name: "Shah Rukh Khan",
    age: 58,
    id: 1,
    address: "India, Mumbai",
    married: true,
    role: "Actor",
  };
  console.log({ userWithRole });

  //using interface
  interface UserWithRole2 extends UserTypeNormally {
    currentLocation: string;
    married?: boolean;
    wifeName?: string;
    familyMembers: number;
    houseName: string;
  }

  const newUser: UserWithRole2 = {
    name: "SRK",
    age: 60,
    address: "Mumbai",
    currentLocation: "I dont know",
    married: false,
    wifeName: "Not married",
    familyMembers: 101,
    houseName: "Mannat",
  };

  console.log(newUser);

  //   interface...........................array
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const studentGrp1: Roll1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const studentGrp2: Roll2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  console.log(studentGrp1, studentGrp2);

  //   interface .............................function
  type Addition1 = (num1: number, num2: number) => number;
  interface Addition2 {
    (num1: number, num2: number): number;
  }

  const calculatingAdd: Addition1 = (num1, num2) => num1 + num2;
  const calculatingAdd2: Addition2 = (alu, potol) => alu + potol;

  const result1 = calculatingAdd(10, 20);
  const result2 = calculatingAdd2(30, 20);
  console.log(result1, result2);

  //    array ------> type allias
  //    function -----> type allias
  //    object -----> type allias / interface
}
