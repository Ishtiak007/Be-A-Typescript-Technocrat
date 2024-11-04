{
  //utility types

  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
    address: string;
  };
  type NameAge = Pick<
    Person,
    "name" | "age" | "email" | "contactNo" | "address"
  >;
  //   type NameAge = {
  //     name: string;
  //     age: number;
  //     email?: string | undefined;
  //     contactNo: string;
  // }

  //   Omit
  type ContactInfo = Omit<Person, "name" | "contactNo">;
  //   type ContactInfo = {
  //     age: number;
  //     email?: string | undefined;
  // }

  //   Required
  type PersonRequired = Required<Person>;
  //   type PersonRequired = {
  //     name: string;
  //     age: number;
  //     email: string;
  //     contactNo: string;
  // }

  //Partial
  type PersonPartial = Partial<Person>;
  //   type PersonPartial = {
  //     name?: string | undefined;
  //     age?: number | undefined;
  //     email?: string | undefined;
  //     contactNo?: string | undefined;
  // }

  //   Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "MR. Ishtiak",
    age: 721,
    contactNo: "017XXXXXXXX",
    address: "Dhap Rangpur",
  };
  person1.name = "Mr Kamal";
  //   Cannot assign to 'name' because it is a read-only property.

  //   Record
  type MyObject = Record<string, string>;
  const obj1: MyObject = {
    firstName: "Ishtiak",
    lastName: "Ahmed",
    address: "Rangpur",
  };

  // Define an object with some properties
  const exampleObject: Record<string, unknown> = {
    name: "Alice",
    age: 30,
    isAdmin: true,
    details: {
      hobbies: ["reading", "swimming"],
      address: {
        city: "Wonderland",
        zip: 12345,
      },
    },
  };
}
