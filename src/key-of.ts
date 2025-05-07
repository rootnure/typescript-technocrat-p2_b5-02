{
  // Generic Constraints with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

  type TOwner = "bike" | "car" | "ship"; // Manually
  type TOwner2 = keyof Vehicle; // Using keyof

  const person1: TOwner = 'bike';
  const person2: TOwner2 = "bike";

  const gerPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  }

  const user = {
    name: "Mr. X",
    age: 26,
    address: "Dhk",
  }
  // user['age'] // 26

  const car = {
    model: "Yoyota 2000",
    price: 20000,
  }

  const result1 = gerPropertyValue(user, "name");
  const result2 = gerPropertyValue(car, "model");

}