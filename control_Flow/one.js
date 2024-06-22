// if 

// <, >, >=, <=, !=, ==, ===, 

// if (2 === "2") {
//     console.log("Executed");
// } else{
//     console.log("Not Executed");
// }

if(true){
    const power = "fly"
    // console.log(`Your POwer is ${power}`);
}

// console.log(`Your POwer is ${power}`);

let balance = 1000

// if(balance > 500 ) console.log("True"); // IMplicit scope

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 1000) {
//     console.log("less then 1000");
// } else if (balance < 1500 ) {
//     console.log("less than 1500");
// } else {
//     console.log("greater than 1500");
// }

const loggedIN = true
const debitcard = true

if (loggedIN && debitcard) {
    console.log("YOu can buy");
}

const loggedInGoogle = true
const loggedInEmail = false

if (loggedInEmail || loggedInGoogle) {
    console.log("YOu are loggedIN");
}