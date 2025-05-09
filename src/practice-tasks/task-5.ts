{
    type ReverseString = (str: string) => string;
    const reverseString: ReverseString = (str) => {
        return str.split("").reverse().join("");
    }
    console.log(reverseString('hello'));
}