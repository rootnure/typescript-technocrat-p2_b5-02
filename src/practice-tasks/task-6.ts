{
    type Sum = (...values: number[]) => number;
    const sum: Sum = (...values) => {
        return values.reduce((curr: number, acc: number): number => acc + curr, 0);
    }
    console.log(sum(1, 2, 3));
}