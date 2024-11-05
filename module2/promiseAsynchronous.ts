{
  // simulate
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };
  getTodo();

  //   for string..........................................................
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something is happening";
      if (data) {
        resolve(data);
        console.log(resolve(data));
      } else {
        reject("Failed to load data");
      }
    });
  };
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log(data);
    return data;
  };
  showData();

  //for boolean.............................................................
  const createPromise2 = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const data: boolean = true;
      if (data) {
        resolve(data);
        console.log(resolve(data));
      } else {
        reject("Failed to load data");
      }
    });
  };
  const showData2 = async (): Promise<boolean> => {
    const data: boolean = await createPromise2();
    console.log(data);
    return data;
  };
  showData2();

  //for object..............................................................
  type SometingType = {
    something: string;
  };
  const createPromise3 = (): Promise<SometingType> => {
    return new Promise<SometingType>((resolve, reject) => {
      const data: SometingType = {
        something: "something is happening now",
      };
      if (data) {
        resolve(data);
        console.log(resolve(data));
      } else {
        reject("Failed to load data");
      }
    });
  };
  const showData3 = async (): Promise<SometingType> => {
    const data: SometingType = await createPromise3();
    console.log(data);
    return data;
  };
  showData3();
}
