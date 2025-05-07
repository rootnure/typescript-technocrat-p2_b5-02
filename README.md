# Typescript Technocrad 01

## Basic Data Types in TS

### Primitive types: string, number, boolean, undefined, null
```ts
let firstName : string = 'Nure Alom'; // string
let age : number = 26; // number
let isAdmin = true; // boolean
let x : undefined = undefined; // undefined
let z : null = null; // null
```
### Non-primitive types: array, tuple, object
```ts
let friends : string[] = ['Ashiq', 'Bablu', 'Hablu']; // string type array
let eligibleIds : number[] = [2411, 6457, 8790]; // number type array
let coordinates : [number, number] = [23.27, 39.19]; // Tuple with same typs of data
let user : [string, number, boolean] = ['Nure Alom', 26, true]; // Tuple with different types of data
// Object
const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Md',
    middleName: 'Nure',
    lastName: 'Alom',
}
```
### Optional Type
```ts
const user1 : {
    firstName: string;
    middleName?: string; // ? --> Optional type property
    lastName: string;
    isMarried: boolean;
} = { // middleName property is now optional
    firstName: 'Nure',
    lastName: 'Alom',
    isMarried: false,
}
```
### Literal Type
```ts
const user2 : {
    name: string;
    course: 'Level 2 Development'; // type --> literal type (value as a type)
    age: number;
} = {
    name: 'Nure Alom',
    course: 'Level 2 Development', // course value is now fixed to "Level 2 Develpment"
    age: 26,
}
```
### Access Modifier
```ts
const user3 : {
    course: 'Level 2 Web Dev';
    readonly userId: string; // value only assignabel during declaration.
} = {
    course: 'Level 2 Web Dev',
    userId: 'WEB5-1234', // ✅
}
// user3.userId = 'WEB5-5500'; // ❌
```
### Functions in TS
- Normal Function
- Arrow Function
- Method (Funciton in an object as property)
- Array Method (map(), forEach(), filter(), find(), some(), all())
```ts
// Normal Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 2); // ✅
// add(2, "2"); // ❌

// Arrow Function
const arrowAdd = (num1: number, num2: number): number => num1 + num2;
arrowAdd(2, 5); // ✅

// Method (Object Property --> Function)
const userData = {
    name: 'Nur',
    age: 26,
    balance: 0,
    getAge(): number { // no parameter
        return this.age;
    },
    addBalance(balance: number): number { // receive and return number type value
        return this.balance + balance;
    },
    reduceBalance(balance: number): string { // receive number type and return string type value
        return `My new balance is ${this.balance - balance}`;
    }
}

const numberArr: number[] = [5, 7, 15];
const newArr: number[] = numberArr.map((elem: number): number => elem * elem); // map() method receiving a number and returning a number
```
### Spread (...) operator
- Spread on object or array
```ts
// Spread operator in Array
const arr1: string[] = ['a', 'b', 'c'];
const arr2: string[] = ['d', 'e'];
const newArr: string[] = [...arr1, ...arr2]; /// ['a', 'b', 'c', 'd', 'e']
// Spread operator in Object
const obj1 : {name: string; age: number} = {name: 'Nur', age: 26};
const obj2 : {isStudent: boolean; isEnrolled: boolean;} = {isStudent: true, isEnrolled: false};
const obj = {...obj1, ...obj2};
```
### Rest (...) operator
- Rest on array
```ts
// Rest in Array
function greatFriends(...students: string[]) { // do something }
greatFriends('Bablu', 'Hablu', 'Gablu', 'Dablu', 'Oblu');
```
### Destructuring
- Object destructuring
- Array destructuring
- Object destructuring don't support type assign during destructuring
```ts
// Object destructuring
const {
    contatNo, // normal destructuring
    // address: string, // ❌
    name: { lastName } // multi level destructuring
} = user;
// Array destructuring
const myContact = ['Rahab', 'Nafis', 'Saraf', 'Jotya', 'Avro'];
const [m, , ...rest] = myContact;
```
### Alias
- Name Alias
- Type Alias
```ts
    // Name Alias --> store a value in a different variable than property name during destructuring
    const {fullName: name, rollNumber: roll} = user;
    // Type Alias → Declare a structure as type and use that as variable type during variable declaration
    // Object
    type TStudent = {
        name: string;
        age: number;
        isMale: boolean;
        contactNo?: string;
        address: string;
    }
    const student1: TStudent = {
        name: 'Nur',
        age: 62,
        isMale: true,
        contactNo: "+982342345234",
        address: "Ghorer Kona",
    }

    // Primitive Type Alias
    type TAddress = string;
    type TUserId = number;
    type TIsAdmin = boolean;

    const isAdmin: TIsAdmin = false;
    const address: TAddress = "Nodir Dhare";
    const userId: TUserId = 4240;

    // Type Alias for Function
    type TAdd = (num1: number, num2: number) => number;
    const add: TAdd = (num1, num2) => num1 + num2;
```
### Union and Intersection in TS
- Union --> Any of the following types are acceptable
```ts
type TPositiveBloodGroups = "A+" | "B+" | "AB+" | "O+";
type TNegativeBloodGroups = "A-" | "B-" | "AB-" | "O-";
type TUser = {
    name: string;
    gender: "male" | "female" | null;
    bloodGroup: TPositiveBloodGroups | TNegativeBloodGroups | null;
}
```
- Intersection --> Must fill all types
```ts
type TFrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
}
type TBackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
}
type TFullstackDeveloper = TFrontendDeveloper | TBackendDeveloper;
const developer1: TFullstackDeveloper = {
    skills: ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
}
```
### Different Names of ? (Question Marks) in TS
- Ternary Operator: Short-cut of if-else conditions
    - condition ? if_true : if_false
```ts
const age: number = 12;
age >= 18 ? console.log("adult") : console.log("not adult");
```
- Nullish Coalescing: null / undefined --> Decision Making
    - condition ?? decision
```ts
const userRole: string | null | undefined = null;
const userType: string = userRole ?? "Guest";
console.log(userType);
```
- Optional Chaining: Stop object chaining if property not found or undefined to avoid error
    - variable?.property?.innerProperty
```ts
const user1: TUser = {
    name: 'Nur',
    address: {
        city: 'Dhaka',
        postalCode: 1000,
        presentAddress: 'Dhaka, Bangladesh',
    }
}
const permanentAddress = user1?.address?.permanentAddress ?? 'No permanent address found';
console.log(permanentAddress);
```
### More Types in TS
- Nullable type --> When a value is null then it it nullable types
```ts
const userToken: string | null = null;
console.log(userToken);
```
- Unknown type --> When type is not known before runtime then unknown type is used
```ts
const getRole = (token: unknown) => token ? 'user' : 'guest';
// token can be string, null, undefined or esle type
```
- Never type --> When a funciton return nothing but error then the return type is never
```ts
const throwError = (msg: string): never => {
    throw new Error(msg);
}
```

## Explore Advanced Types of TS

### Type Assertion
- Better understanding of type than typescript
- ```as``` keyword us used for type assertion
```ts
console.log((variable as string).length);
const result1 = kgToGm(1) as number;
const result2 = kgToGm('1 KG') as string;
```

### Type Narrowing
- To be more precise about the type of a value within a specific block of code is type narrowing
```ts
// type narrowed to string | number for parameter value
// for return type narrowed to string | number | undefined
const kgToGm = (value: string | number): string | number | undefined => {
    // do something...
}
```

### Interface
- Only usable for object type value
```ts
interface IUser { // type alias using interface
    name: string;
    age: number;
}
```
- ```extents``` keyword is used to add (extend) new property
```ts
interface IUserWithRole extends IUser {
    role: string;
}
```
- Both ```interface``` and ```type``` can be extended by each other
```ts
type TUser = {
    name: string;
    age: number;
};
interface IUserWithRole extends TUser { // extend type using interface
    role: string;
}
```
- Array type using interface
```ts
// type TRoll = number[];
interface IRoll {
    [index: number]: number
}
```
- Function type using interface
```ts
// type TAdd = (num1: number, num2: number) => number;
interface IAdd {
    (num1: number, num2: number): number;
}
```

### Generic in TS
- Dynamically allocate type
- Must use angle bracket ```<>``` to declare or pass type
```ts
type TGenericArray<T> = Array<T>; // Dynamic type array using generic
const mentors: TGenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
const isAdmins: TGenericArray<boolean> = [true, false, true];
const users: TGenericArray<{ name: string, roll: number }> = [
    { name: "Mr. X", roll: 5, }, { name: "Mr. Y", roll: 10  },
];

type TGenericTuple<X, Y> = [X, Y]; // Dynamic type tuple using generic
const user2: TGenericTuple<string, string> = ['Mr. X', 'Mrs. Y'];
const userWithID: TGenericTuple<number, { name: string, email: string }> = [1221, { name: 'Mr. Z', email: 'zzz@ghumbabu.com' }];
```
- Generic With Interface
```ts
interface IDeveloper<T> {
    name: string;
    smartWatch: T;
}

type TLabTopWatch = {
    brand: string;
    model: string;
    display: string;
};
interface TAppleWatch {
    brand: string;
    model: string;
    releaseYear?: number;
    display: string;
    features: string[];
};

const noobDeveloper: IDeveloper<TLabTopWatch> = {
    name: "Nur",
    smartWatch: {
        brand: "LabTop",
        model: "LT2022",
        display: "OLED",
    }
};
const richDeveloper: IDeveloper<TAppleWatch> = {
    name: "Hassan",
    smartWatch: {
        brand: "Apple",
        model: "Apple Watch 2025",
        display: "Amulade",
        features: ["Sleep Track", "Heart Track", "Weather Update"]
    }
}
```
- Default type in generic
```ts
interface IDefaultGeneric<T, X = null> {
     name: string;
    smartWatch: T;
    bike?: X
}
```
### Function with Generic
- Array using Function with Generic
```ts
const createArrayWithGeneric = <T>(param: T): T => {
    return [param];
}
createArrayWithGeneric<string>("Mr. Y");
```
- Tuple using Function with Generic
```ts
const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
}
createTupleWithGeneric<string, boolean>("Mr. X", true);
interface IUser { id: string; name: string };
createTupleWithGeneric<IUser, boolean>({ id: 983, name: "Mr.X" }, true);
```
- Object using Function with Generic
```ts
const addCourseToStudent = <T>(student: T) => {
    const course = "Web Development";
    return { ...student, course }
}

const student1 = addCourseToStudent<{ name: string; email: string; devType: string }>({ name: "Mr. X", email: "mr.x@mail.com", devType: "NLWD" });
```

### Constraints in TS
```ts
const addCourseToStudent = <
                // these properties must be present
    T extends { id: number; name: string; email: string; }
    >(student: T) => {
        const course = "Web Development";
        return { ...student, course }
}
```

### Constraint using ```keyof```
- Creating a new type using key of object or object type
```ts
type Vehicle = { bike: string; car: string; ship: string; }
type TOwner = keyof Vehicle; // Same as --> type TOwner = "bike" | "car" | "ship";
const gerPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
}
const user = { name: "Mr. ABC", age: 20, email: "abc@mail.co.bm" };
const car = { model: "Toyota 2000", price: 20000 };
const result1 = gerPropertyValue(user, "email");
const result2 = gerPropertyValue(car, "model");
```

### Asynchronous TS
```ts
type TData = { msg: string; };
const createPromise = (): Promise<TData> => {
    return new Promise<TData>((resolve, reject) => {
        const data: boolean = true;
        if (data) resolve({ msg: "promise resolve hoichey vai" });
        else reject("Data Dite Hari No...");
    });
}
// calling custom promise
const showData = async (): Promise<TData> => {
    const data: TData = await createPromise();
    console.log(data);
}
```

### Conditional Types
- Simple Conditional Type
```ts
type T1 = number;
type TConditional1 = T1 extends null ? true : false; // Conditional Type
```
- Usually used Conditional Type
```ts
type TCheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
type THasBike = TCheckVehicle<"bike">; // true
```

### Mapped Types
- Look Up Type
```ts
type TArea = {
    height: number;
    width: number;
}
type THeight = TArea["height"]; // Give the type or "height" from "TArea"
```
- Mapping
```ts
// With Normal Type Alias
type TAreaString = {
    height: number;
    width: number;
}
type TAreaStringMapped = {
    // [key in "height" | "width" ]: string;
    [key in keyof TAreaNumber]: string;
}

// With Generic
type TAreaGenericMapped<T> = {
    [key in keyof T]: T[key]; // T = { height: string; width: number; } // key = T["height"]
}
const area: TAreaGenericMapped<{ height: string; width: number; }> = {
    height: "100",
    width: 50
}
```