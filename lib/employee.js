
//This helps sorts engineering,intern, and manager, so they will all return name,id,and email for thoose 3 when choosen.

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }


getName() {

return this.name

}

getId() {

    return this.id
    
    }

getEmail() {

        return this.email
        
 }

 getRole(){
    return "employee"
 }
}

module.exports = employee;