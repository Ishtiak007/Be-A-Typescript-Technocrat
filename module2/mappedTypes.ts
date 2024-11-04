{
  // mapped types
  const arryOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const arrayOfStrings: string[] = ["1", "2", "4", "6"];

  const stringArrayFromNum: string[] = arryOfNumbers.map((number) =>
    number.toString()
  );

  type AreaNumber = {
    height: number;
    width: number;
  };
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };
  type Height = AreaNumber["height"]; //look up type
  type AreaString = {
    [key in keyof AreaNumber]: string; // working like loop
  };

  //............................................
  type AreaString2<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString2<{ height: string; width: number }> = {
    height: "1000",
    width: 300,
  };
  console.log(area1);
}
