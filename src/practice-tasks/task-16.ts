{
    type Obj = {
        name: string;
        age: number;
        email: string;
        birthYear: number;
    }
    const getPropertyValue = (obj: Obj, key: keyof Obj): string | number => {
        return obj[key];
    }

    const user: Obj = {
        name: "Mr. BBC",
        age: 13,
        email: "piccibacca@nomail.com",
        birthYear: 2013
    }
    console.log(getPropertyValue(user, "email"));
}