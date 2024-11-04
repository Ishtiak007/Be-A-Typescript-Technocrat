{
  //function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const result = createArray("Amader desher nam holo bangladesh");

  const createArrayWithGeneric = <Type>(params: Type): Type[] => {
    return [params];
  };
  const resultNumber = createArrayWithGeneric<number>(123);
  const resultString = createArrayWithGeneric<string>(
    "Amader desher nam holo Bangladesh"
  );
  interface ResultObjType {
    name: string;
    roll: number;
    class: string;
  }
  const resultObj = createArrayWithGeneric<ResultObjType>({
    name: "ishtiak",
    roll: 107,
    class: "BSc in CSE 3rd year",
  });

  //   createArrayWithTuple
  const createArrayWithTuple = <Type1, Type2>(
    params1: Type1,
    params2: Type2
  ): [Type1, Type2] => {
    return [params1, params2];
  };

  const tupleResult = createArrayWithTuple<boolean, string>(true, "string");

  const tupleResult2 = createArrayWithTuple<
    number,
    { breakFast: string; drinks: string }
  >(107, {
    breakFast: "egg",
    drinks: "Milk",
  });

  //   ..........................
  const student = <Type1>(student: Type1) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };
  type ResultStudentType = {
    name: string;
    roll: number;
    class: string;
    department?: string;
  };
  const resultOfStudent = student<ResultStudentType>({
    name: "Ishtiak Ahmed",
    roll: 107,
    class: "Software Engineer",
  });
  const resultOfStudent2 = student<ResultStudentType>({
    name: "Ahmed Firoz",
    roll: 107,
    class: "Software developer",
    department: "CSE",
  });
  console.log(resultOfStudent, resultOfStudent2);
}
