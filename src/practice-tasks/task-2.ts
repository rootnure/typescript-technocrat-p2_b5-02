{
    type User = (name: string, age: number, role?: 'admin' | 'user' | 'guest') => void;
    const user: User = (name, age, role) => {
        console.log(`Name: ${name}, Age: ${age} ${role ? `is ${role} user.` : ''}`);
    }
    user("Mr. Rotrigeze", 29, "guest");
    user("Mr. Twarks", 28);
    user("Mr. Sarwafkat", 34, "user");
}