const Engineer = require('../lib/engineerClass');

describe("Engineer", () => {
    it("should create an object with a name, age, email and gitHub if provided valid arguments", () => {
        const engineer = new Engineer("Ethan Harsh", 1, "ethan@ethanharsh.com", "https://github.com/EthanHarsh")

        expect(engineer.name).toEqual("Ethan Harsh");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("ethan@ethanharsh.com");
        expect(engineer.getName()).toEqual("Ethan Harsh");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toEqual("ethan@ethanharsh.com");
        expect(engineer.getRole()).toEqual("Engineer");
        expect(engineer.getGithub()).toEqual("https://github.com/EthanHarsh");
    });
});