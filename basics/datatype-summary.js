// Primitive 

// 7 type => string number boolean null symbol undefined Bigint

const num1 = 100
const num2 = 200.5

const id = Symbol("123");
const anotherId = Symbol("123")

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

const bignum = 1n
// console.log(typeof bignum);



// Reference (Non- primitive)

// Array objects functions

const heros = ["me", "you"]
// console.log(typeof heros);

let myobj = {
    name: "Pandey",
    age:  18,
}

// console.log(typeof myobj);

let myfun = function() {
        // console.log("hello world");
}

// console.log(typeof myfun);

// Memory type => 1) stack (Premitive) hipe(Non- premitive)

let myname = "Chandraprakash"
let anothername = myname;
console.log(anothername);
anothername = "MiniMiner";
console.log(anothername);
console.log(myname);

let person1 = {
    myname : "Rahul",
    myroll : 21
}

let person2 = person1;
person2.myname = "kinda";

console.log(person1);
console.log(person2);