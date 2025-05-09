{
    const isString = (value: unknown): value is string => {
        return typeof value === 'string';
    }

    const printUpperCase = (value: unknown): void => {
        if (isString(value)) {
            console.log(value.toUpperCase());
        }
    }

    printUpperCase("Hello World");
}