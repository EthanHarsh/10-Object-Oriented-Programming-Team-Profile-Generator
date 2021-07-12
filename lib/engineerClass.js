const Employee = require("./employeeClass");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;
