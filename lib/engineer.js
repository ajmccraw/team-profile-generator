const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call parent constructor here
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;