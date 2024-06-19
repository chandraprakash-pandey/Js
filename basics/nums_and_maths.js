let score = 400;
// console.log(score);

let balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.894;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const Hundreds = 1000000;
// console.log(Hundreds.toLocaleString()); // Indian number 
// console.log(Hundreds.toLocaleString('en-US')); // US

//+++++++++++++++Maths+++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); //- +mai hota
// console.log(Math.round(3.74));
// console.log(Math.round(3.44));
// console.log(Math.ceil(3.44));
// console.log(Math.floor(3.74));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(1,2,3,4,5));

// console.log(Math.random());
// console.log(Math.random()*10 +1); // 1 ya 1 se bada random
// console.log(Math.floor(Math.random()*10 +1)); //floor kr dia

//formula 
const min = 10;
const max = 20;

console.log(Math.floor( ( Math.random() * (max-min+1) )) + min)
//                                                 | added 1 here to avoid 0