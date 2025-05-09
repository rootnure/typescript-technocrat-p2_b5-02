{
    type ProcessData = (value: string | number) => number;
    const processData: ProcessData = (value) => {
        if (typeof value === 'string') return value.length;
        return value * value;
    }
    console.log(processData(5));
    console.log(processData("5"));
    console.log(processData("hello world!"));
}