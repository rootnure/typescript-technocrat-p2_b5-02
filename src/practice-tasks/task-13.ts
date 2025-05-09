{
    const removeDuplicate = <T>(value: T[]): T[] => {
        const noDuplicate: T[] = [];
        value.forEach((item: T) => {
            if (noDuplicate.indexOf(item) === -1) noDuplicate.push(item);
        })
        return noDuplicate;
    }
    console.log(removeDuplicate<number>([6, 8, 4, 6, 5, 4, 9, 6, 4]));
    console.log(removeDuplicate<string>(['6', '8', '6', '4', '5', '5', '9']));
    console.log(removeDuplicate<string>(['a', 'c', 'z', 'z', 'c', 'm', 'o']));
}