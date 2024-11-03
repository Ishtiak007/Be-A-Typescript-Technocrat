{
  // type assertion
  let anything: any;
  anything = "Next level web development";
  anything = 107;
  (anything as boolean).valueOf;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const retult1 = kgToGram(1) as number;
  const retult2 = kgToGram("1") as string;
  const retult3 = kgToGram("") as undefined;
  console.log({ retult1, retult2, retult3 });

  //   useing try and catch
  type CustomError = {
    message: string;
  };
  try {
    //rest code
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
