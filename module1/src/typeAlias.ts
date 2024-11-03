{
  // Type Alias
  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: "Ishtiak",
    age: 24,
    gender: "male",
    contactNo: "01737223990",
    address: "Dhap, Lalkuthi, Rangpur",
  };

  const student2: {
    name: string;
    age: number;
    gender: string;
    address: string;
  } = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "Dhaka",
  };

  const student3: {
    name: string;
    age: number;
    gender: string;
    address: string;
  } = {
    name: "Mezba",
    age: 40,
    gender: "male",
    address: "Ctg",
  };

  //   ................................
  // common Student type
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student4: Student = {
    name: "Nahid",
    age: 45,
    gender: "male",
    contactNo: "01700000000",
    address: "Rajshahi",
  };
  const student5: Student = {
    name: "Warner",
    age: 35,
    gender: "male",
    contactNo: "01700000000",
    address: "Australia",
  };
  const student6: Student = {
    name: "Smith",
    age: 40,
    gender: "male",
    contactNo: "01700000000",
    address: "Melbrone",
  };

  //   ..........................
  // UserName and IsAdmin common type akias
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Erin01999";
  const isAdmin: IsAdmin = true;

  //   function alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
