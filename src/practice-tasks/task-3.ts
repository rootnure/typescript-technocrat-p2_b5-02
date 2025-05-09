{
    type Person = {
        name: string;
        address: {
            street: string;
            postalCode: number;
            city: string;
            country: string;
        };
        hairColor: "black" | "brown" | "blond" | "red" | "N/A";
        eyeColor: "black" | "blue" | "brown" | "gray" | "N/A";
        income: number;
        expense: number;
        hobbies: string[];
        familyMembers: string[];
        job: string;
        skills: string[];
        isMarried: boolean;
        Friends: string[];
    }
}