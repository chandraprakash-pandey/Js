// This

const user = {
    Username: "Pandey",
    age: 18,
    welcome: function(){
        console.log(`${this.Username}, Welcome here`);
        console.log(this);
    }

}

// user.welcome()
// user.Username = "Sam"
// user.welcome()

// console.log(this);

// let myname = "Chandraprakash"
// function chai(){
//     let name = "PAndey"
//     console.log(this.name)
//     // console.log(this.myname)
// }

// const chai = function(){
//     let name = "PAndey"
//     console.log(this.name)
// }

const chai = () => {
    let name = "Pandey"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => { // This is expilict return in which we use {return}
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2  // These both are implicit return in which return keyword is not used
// const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username: "Chandraprakash Pandey"}) // to use object in implicit arrow function

console.log(addTwo(3,5))