//Dates

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString()); //good
// console.log(mydate.toISOString()); //not good
// console.log(mydate.toJSON()); // not good
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString()); // good
// console.log(mydate.toLocaleTimeString());

// let myCreatedDate = new Date(2024, 0, 21) yyyy mm dd
let myCreatedDate = new Date("2024-01-21") // yyyy mm dd
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now() // 1 jan 1970 se lekr aabhi tk ka mili sec
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // 1 jan 1970 se lekr created date tk ka milli sec

// console.log(Math.floor(Date.now()/1000)); //in sec

let newdate = new Date()
console.log(newdate.getMonth());
console.log(newdate.getDay());