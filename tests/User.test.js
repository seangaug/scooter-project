const User = require('../src/User')

describe("user instance integrity checks", () => {
    const user1 = new User("RachaelB", "password1", 27, false);

    // User class username, password, age, and loggedIn properties initialized correctly
    test("User class username, password, age, and loggedIn properties initialized correctly", () => {
        expect(user1).toHaveProperty("username");
        expect(typeof user1.username).toBe("string");
        expect(typeof user1.password).toBe("string");
        expect(typeof user1.age).toBe("number");
        expect(typeof user1.loggedIn).toBe("boolean");
    })

    // User class has login and logout methods
    test("User class has login and logout methods", () => {
        expect(user1.login).toBeDefined();
        expect(typeof user1.login).toBe('function');
        expect(user1.logout).toBeDefined();
        expect(typeof user1.logout).toBe('function');
    })
    
    // User cannot login if incorrect password provided
    const user2 = new User("userSteve", "passwordSteve", 25, false)
    test("User cannot login if incorrect password provided", () => {
        expect(() => user2.login("wrongPassword")).toThrow("incorrect password");
    })
})

// test logout
