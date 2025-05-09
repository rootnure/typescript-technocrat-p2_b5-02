{
    type User = {
        name: string;
        email: string;
    }
    type Admin = {
        adminLevel: "this user is an admin"
    }

    type AdminUser = User & Admin;

    const user1: AdminUser = {
        name: "Mr. Admin User",
        email: "admin@mail.com",
        adminLevel: "this user is an admin",
    }

    const describeAdmin = (user: AdminUser): string => {
        return user.adminLevel;
    }

    console.log(describeAdmin(user1));
}