{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator
  const bros1: string[] = ["Ishtiak", "Tarannum", "Nilima"];
  const bros2: string[] = ["Alia", "Varun", "Taru"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   learn rest operator
  const greetFrinds = (frind1: string, frind2: string, frind3: string) => {
    console.log(`Hi hellow ${frind1} , ${frind2} , ${frind3}`);
  };
  greetFrinds("Abia", "Kabia", "Nabia");

  const greetFrinds2 = (...frinds: string[]) => {
    frinds.forEach((frind: string) => {
      console.log(`Hi hellow ${frind}`);
    });
  };
  greetFrinds2("Abia", "Kabia", "Nabia", "Fobia", "Lobia");
}
