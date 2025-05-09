{
    const getDisplayName = (name: string | null | undefined): string => {
        return name ?? "Anonymous";
    }

    console.log(getDisplayName(undefined));
    console.log(getDisplayName(null));
    console.log(getDisplayName("Mr. ABC"));
}