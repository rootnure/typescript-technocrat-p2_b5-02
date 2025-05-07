{
  // Utility Types

  // Pick --> Pick specific property with type
  type TPerson = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  }
  type TName = Pick<TPerson, "name">;
  type TNameAge = Pick<TPerson, "name" | "age">;

  // Omit --> Pick all property with type except specific property
  type TPersonWithoutAge = Omit<TPerson, "age">;
  type TPersonContact = Omit<TPerson, "name" | "age">;

  // Required --> Update all property as required
  type TPersonRequired = Required<TPerson>;

  // Partial --> Update all property as optional
  type TPersonPartial = Partial<TPerson>;

  // Readonly --> Access Modifier --> Access to read only
  const person: TPerson = {
    name: "Mr. XYZ",
    age: 25,
    contactNo: "134235",
  }
  person.age++; // ✅ changeable for "TPerson" type alias

  type TPersonReadOnly = Readonly<TPerson>; // this will modify the property to readonly
  const person2: TPersonReadOnly = {
    name: "Mr. XYZ",
    age: 25,
    contactNo: "134235",
  }
  // person2.age++; // ❌ can not change for "TPersonReadOnly" type alias

  // Record --> Allow to add similar patterned property
  // type TMyObj = {
  //   a: string;
  //   b: string;
  // }

  // Allow to add as many property as we want in similar pattern
  type TMyObj = Record<string, string>;

  const obj1: TMyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  }

  const emptyObj: Record<string, unknown> = {};
  emptyObj.name = "Mr. MNO";
  emptyObj.age = 22;
  emptyObj.isValidUser = false;
  emptyObj.address = {
    city: "dhk", street: '22/A', postalCode: 1000,
  }
  console.log(emptyObj);

}