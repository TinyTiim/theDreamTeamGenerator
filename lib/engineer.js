
//This section allows to use github rather than school and office number so its only called to the engineering class.
const employee = require("./employee");

class engineer extends employee {
    constructor (name, id , email, github) {
        super(name,id,email)
        this.github = github
    }
    getRole(){
        return 'engineer'
    }
    getGithub(){
        return this.github
    }
}

module.exports = engineer;