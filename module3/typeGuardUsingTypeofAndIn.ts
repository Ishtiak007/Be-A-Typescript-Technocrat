{
  //type guards
  //typeof-->type guard
  type Alphaneumeric = string | number;

  const add = (
    params1: Alphaneumeric,
    params2: Alphaneumeric
  ): Alphaneumeric => {
    if (typeof params1 === "number" && typeof params2 === "number") {
      return params1 + params2;
    } else {
      return params1.toString() + params2.toString();
    }
  };
  const result1 = add("2", "3");
  console.log(result1);

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}.`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };
  const normalUser = {
    name: "Rabid",
  };
  const adminUser = {
    name: "Ishtik",
    role: "admin",
  };
  getUser(adminUser);
}
