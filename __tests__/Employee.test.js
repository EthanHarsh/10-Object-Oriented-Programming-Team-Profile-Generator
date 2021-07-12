const Employee = require('../lib/employeeClass');

describe("Employee", () => {
    it("should create an object with a name, age, and email if provided valid arguments", () => {
        const employee = new Employee("Ethan Harsh", 1, "ethan@ethanharsh.com");

        expect(employee.name).toEqual("Ethan Harsh");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("ethan@ethanharsh.com");
        expect(employee.getName()).toEqual("Ethan Harsh");
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toEqual("ethan@ethanharsh.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});