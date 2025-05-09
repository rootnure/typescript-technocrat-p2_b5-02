{
    const processData = (data: unknown): string | number | unknown => {
        if (typeof data === 'string') return data.toUpperCase();
        else if (typeof data === 'number') return data * data;
        else return data;
    }
    console.log(processData(5));
    console.log(processData("5"));
    console.log(processData("abc"));
    console.log(processData({ value: 9525 }));
}