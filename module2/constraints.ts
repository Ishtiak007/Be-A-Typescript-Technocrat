{
  const student = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Full stack web development";
    const department = "Computer science and engineering";
    return {
      ...student,
      department,
      course,
    };
  };
  const resultOfStudent1 = student({
    name: "Ishtiak",
    id: 107,
    email: "ishtiakahmed01999@gmail.com",
    homeTown: "UK, kurigram",
  });
  const resultOfStudent2 = student({
    name: "Ahmed Firoz",
    id: 107,
    email: "ahmedfiroz01999@gmail.com",
    homeTown: "kurigram, rajarhat",
  });
  console.log(resultOfStudent1, resultOfStudent2);
}
