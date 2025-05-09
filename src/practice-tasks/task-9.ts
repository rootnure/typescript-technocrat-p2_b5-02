{
    type Person = {
        name: string;
        email: string;
        address?: {
            presentAddress?: {
                street: string;
                postalCode: number;
                city: string;
                country: string;
            };
            permanentAddress?: {
                street: string;
                postalCode: number;
                city: string;
                country: string;
            }
        };

    }

    const person1: Person = {
        name: "Mr. Habul",
        email: "mr.habul@mail.com",
        address: {
            presentAddress: {
                street: "21/D",
                postalCode: 10000,
                city: 'Chottoshal',
                country: "BD"
            }
        }
    }

    type GetEmployeeCity = (employee: Person) => string;
    const getEmployeeCity: GetEmployeeCity = (employee) => {
        return employee.address?.presentAddress?.city ?? "City Not Found";
    }
    console.log(getEmployeeCity(person1));
}