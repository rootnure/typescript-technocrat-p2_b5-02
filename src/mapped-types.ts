{
  // Mapped Types

  const arrOfNumbers: number[] = [2, 4, 3];
  // const arrOfStrings : string[] = ['2', '4', '3'];
  const arrOfStrings: string[] = arrOfNumbers.map((num: number) => num.toString()); // ['2', '4', '3']
  console.log(arrOfStrings);

  type TAreaNumber = {
    height: number;
    width: number;
  }

  type THeight = TAreaNumber["height"]; // Look up type

  type TAreaString = {
    height: string;
    width: string;
  }

  type TAreaStringMapped = {
    // [ key in "height" | "width" ]: string;
    [key in keyof TAreaNumber]: string;
  }

  // T = { height: string; width: number; }
  // key = T["height"] // 1st time
  // key = T["width"] // 2nd time
  type TAreaGenericMapped<T> = {
    [key in keyof T]: T[key];
  }

  const area: TAreaGenericMapped<{ height: string; width: number; }> = {
    height: "100",
    width: 50
  }
}