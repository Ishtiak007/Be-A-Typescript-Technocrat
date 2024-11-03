{
  // ternary operator || optional chaining || nullish coalescing

  // ternary operator
  const age: number = 12;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //   nullish coalescing operator ----> null and undefined (decision making)
  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Amader desher nam holo Bangladesh";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };

  const user1: User = {
    name: "Ishtiak",
    address: {
      city: "Rangpur City",
      road: "Lalkuthi road",
      presentaddress: "Lalkuthi",
      //   permanentAddress: "Katki para",
    },
  };
  const permanentAddress =
    user1?.address?.permanentAddress ?? "NO Permanent address";
  console.log({ permanentAddress });
}
