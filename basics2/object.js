//singleton :- Constructor
// Object.create

//object literal

const mysyb = Symbol("key1")

const JsUser = {
    name: "Chandraprakash",
    "full name": "Chandraprakash Pandey",
    age: 18,
    isLoggedIn: false,
    email: "cp.o.pandey@gmail.com",
    lastLoggedIn: ["Moday", "Tuesday"],
    [mysyb]: "myKey2"
}

// console.log(JsUser.email); // 1 way
// console.log(JsUser["email"]); // 2 way
// console.log(JsUser["full name"]); // only way
// console.log(JsUser[mysyb]);
// console.log(typeof JsUser[mysyb]);

JsUser.email = "cp.o.pandey@mmcoe.edu.in"
// console.log(JsUser);
// Object.freeze(JsUser) // object can't be change
JsUser.email = "cp.o.pandey@gpt.edu.in"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World");
}
JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());