{
    // Generic with interface
    interface IDeveloper<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type TLabTopWatch = {
        brand: string;
        model: string;
        display: string;
    };

    const noobDeveloper: IDeveloper<TLabTopWatch> = {
        name: "Nur",
        computer: {
            brand: "HP",
            model: "Old Model",
            releaseYear: 2010,
        },
        smartWatch: {
            brand: "LabTop",
            model: "LT2022",
            display: "OLED",
        }
    };

    interface IAppleWatch {
        brand: string;
        model: string;
        releaseYear?: number;
        display: string;
        features: string[];
    };

    interface IBike {
        brand: string;
        capacity: string;
    }

    const richDeveloper: IDeveloper<IAppleWatch, IBike> = {
        name: "Nur",
        computer: {
            brand: "HP",
            model: "Old Model",
            releaseYear: 2010,
        },
        smartWatch: {
            brand: "Apple",
            model: "Apple Watch 2025",
            display: "Amulade",
            features: ["Sleep Track", "Heart Track", "Weather Update"]
        },
        bike: {
            brand: "Yamaha",
            capacity: "120cc",
        }
    }
}