// Reference Type ---> object

const user: {
  company: "Programming Hero"; // type ----> literal type
  readonly company2: string;
  firstName: string;
  middleName?: string; //Obtional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  company2: "Data Annotion",
  firstName: "Ishtiak",
  //   middleName: "Erin",
  lastName: "Ahmed",
  isMarried: false,
};

// user.company2='PH'
