// for of
 
let myarray = [1,2,3,4,5]

// for (const index of myarray) {
//     console.log(index);
// }

const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(greet);
}

// Map

let map = new Map()
map.set("IN", "Indian")
map.set("FR", "France")
map.set("SR", "Shri Lanka")
map.set("IN", "Indian")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
    console.log(`${key} = ${value}`);
}

let myObj = {
    name: "Pandey",
    age: 18
}

// for (const keys of myObj) {
    // console.log(keys); // obj can't be iterate
// }