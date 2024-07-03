const UserID = {
    Username: "Pandey",
    age: 18,
    Password: "1234",

    getUserDetail: function (){
        // console.log("Hello Bro");
        // console.log(`Username: ${this.Username}`);
        console.log(this);
    }
}

// console.log(UserID.Username);
// console.log(UserID.getUserDetail());
// console.log(this);

function User(Username, age, gender) {
    this.Username = Username;
    this.age = age;
    this.gender = gender;

    this.greetings = () =>{
        console.log(`Welcome ${this.Username}`);
    }
}

const User1 = new User("Chandraprakash", 18, "Male")
const User2 = new User("Vedant", 19, "Male")
console.log(User1);
console.log(User2);