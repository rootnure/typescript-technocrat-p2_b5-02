{
    // Type Assertion

    let variable: any;
    variable = "Web Development";
    console.log((variable as string).length);

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'number') {
            return value * 1000;
        } else if (typeof value === 'string') {
            return `The converted value: ${parseFloat(value) * 1000}`;
        }
    }

    const result1 = kgToGm(1) as number;
    const result2 = kgToGm('1 KG') as string;
    console.log({ result1, result2 });
}