const Intern = require('../lib/internClass');

describe("Intern", () => {
    it("should create an object with a name, age, email and school if provided valid arguments", () => {
        const intern = new Intern("Ethan Harsh", 1, "ethan@ethanharsh.com", "The Ohio State University")

        expect(intern.name).toEqual("Ethan Harsh");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("ethan@ethanharsh.com");
        expect(intern.school).toEqual("The Ohio State University")
        expect(intern.getName()).toEqual("Ethan Harsh");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toEqual("ethan@ethanharsh.com");
        expect(intern.getRole()).toEqual("Intern");
        expect(intern.getSchool()).toEqual("The Ohio State University");
    })
})