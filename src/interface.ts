{
    // Interface

    type TUser = { // type alias using type
        name: string;
        age: number;
    };
    const user1: TUser = {
        name: "Nur",
        age: 26,
    }

    interface IUser { // type alias using interface
        name: string;
        age: number;
    }
    const user2: IUser = {
        name: "Nur",
        age: 26,
    }

    type TUserWithRole = TUser & { // extend type alias using intersection
        role: string;
    }
    const user3: TUserWithRole = {
        name: "Nur",
        age: 26,
        role: 'user',
    }

    interface IUserWithRole extends IUser { // extend interface using extends keyword
        role: string;
    }
    const user4: IUserWithRole = {
        name: "Nur",
        age: 26,
        role: 'user',
    }

    interface IUserWithRoleAndMail extends TUserWithRole { // extent type using interface
        email: string;
    }
    const user5: IUserWithRoleAndMail = {
        name: "Nur",
        age: 26,
        role: "user",
        email: "nur@mail.com",
    }

    // in JS ==> object --> object; array --> object; funciton --> object

    // array
    type TRoll = number[]; // type for array
    const roll1: TRoll = [2, 3, 5, 8];

    interface IRoll { // interface for array
        [index: number]: number
    }
    const roll2: IRoll = [2, 3, 4, 6];

    // funciton
    type TAdd = (num1: number, num2: number) => number; // type for function
    const add1: TAdd = (num1, num2) => num1 + num2;

    interface IAdd { // interface for function
        (num1: number, num2: number): number;
    }
    const add2: IAdd = (num1, num2) => num1 + num2;
}