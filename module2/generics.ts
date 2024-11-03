{
  // generic type
  const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const rollNumbers1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  type GenericNumberArray = Array<number>;
  const rollNumbers2: GenericNumberArray = [234, 5, 66, 89];

  const friends: string[] = ["Ishtiak", "Emran", "Sumon", "Asadur"];
  const frineds2: Array<string> = ["Mr. X", "Mr. Y", "Mr.Z"];
  type GenericStringArray = Array<string>;
  const friends3: GenericStringArray = [
    "alu",
    "potol",
    "fulkopi",
    "badha kopi",
  ];

  const boolArray: boolean[] = [true, false, true, true];
  const boolArray2: Array<boolean> = [false, true, true, true];
  type GenericBoolArray = Array<boolean>;
  const boolArray3: GenericBoolArray = [true, false, false, false];

  // dynamic generic array
  type GenericArray<Type> = Array<Type>;

  const numberArray: GenericArray<number> = [12, 21, 23, 34, 54];

  const stringArray: GenericArray<string> = [
    "Jhinga",
    "Badhakopi",
    "Shatputhi",
  ];
  const booleanArray: GenericArray<boolean> = [true, true, true, false];

  // dynamic generic object
  //   type UserType = { name: string; age: number };
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Ishtiak",
      age: 23,
    },
    {
      name: "Warner",
      age: 37,
    },
  ];

  //   generic tuple
  type GenericTupol<Type1, Type2, Type3, Type4> = [Type1, Type2, Type3, Type4];
  const people: GenericTupol<string, string, string, number> = [
    "Ahmed",
    "Ishtiak",
    "Erin",
    10,
  ];

  const peopleWithId: GenericTupol<
    number,
    { name: string; email: string },
    string,
    string
  > = [
    107,
    {
      name: "Ishtiak",
      email: "ishtiak.sparrow98@gmail.com",
    },
    "19000",
    "Amader desher nam holo bangladesh",
  ];
  console.log(peopleWithId);
}
