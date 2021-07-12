const Manager = require('../lib/managerClass');

describe("Manager", () => {
    it("should create an object with a name, age, email, and Office Number if provided valid arguments", () => {
        const manager = new Manager("Ethan Harsh", 1, "ethan@ethanharsh.com", 25)

        expect(manager.name).toEqual("Ethan Harsh");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("ethan@ethanharsh.com");
        expect(manager.officeNumber).toEqual(25);
        expect(manager.getName()).toEqual("Ethan Harsh");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual("ethan@ethanharsh.com");
        expect(manager.getRole()).toEqual("Manager");
    })
})