let Data = "User data"
class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }
    viewData(){
        console.log(Data);
    }
}

let student1  = new User("Suresh", "oo@gmail.com");
let student2  = new User("kslesh", "dsdsd@gmail.com");
console.log(student1);
console.log(student2);

class Admin extends User {
    editData(){
        Data = "new data";
    }
}

let Admin1 = new Admin("admin", "admin@gmail.com")
console.log(Admin1);