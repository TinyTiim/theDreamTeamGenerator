
//When choosing manager in the prompt it allows you to enter a officenum rather than a github or a school.
const employee = require("./employee");

class manager extends employee {
    constructor (name, id , email, officeNum) {
        super(name,id,email)
        this.officeNum = officeNum
    }
    getRole(){
        return 'manager'
    }
    getGithub(){
        return this.officeNum
    }
}

module.exports = manager;