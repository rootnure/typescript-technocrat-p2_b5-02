{
    // Introduction to Generics

    type TGenericArray<T> = Array<T>; // Dynamic type array using generic

    //const rollNumbers : number[] = [4, 5, 23];
    // const rollNumbers: Array<number> = [4, 5, 23];
    const rollNumbers: TGenericArray<number> = [4, 5, 23];

    // const mentors : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: TGenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const isAdmins: boolean[] = [true, false, true];
    const isAdmins: TGenericArray<boolean> = [true, false, true];


    // Generic in array of object
    const users: TGenericArray<{ name: string, roll: number }> = [
        { name: "Mr. X", roll: 5, }, { name: "Mr. Y", roll: 10 },
    ]

    // Generic Tuple

    type TGenericTuple<X, Y> = [X, Y]; // Dynamic type tuple using generic

    const user1: [string, string] = ['Mr. X', 'Mrs. Y'];
    const user2: TGenericTuple<string, string> = ['Mr. X', 'Mrs. Y'];

    const userWithID: TGenericTuple<number, { name: string, email: string }> = [1221, { name: 'Mr. Z', email: 'zzz@ghumbabu.com' }]

}