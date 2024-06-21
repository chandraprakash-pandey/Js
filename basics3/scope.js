let a = 10 // Global Scope
const b = 20
// var c = 30 //its not good as its value changes in block scope

if(true){
    let a = 100 // block scope
    const b = 200
    // var c = 300
    console.log(a);
    console.log(b);
    // console.log(c);
}

console.log(a);
console.log(b);
// console.log(c);