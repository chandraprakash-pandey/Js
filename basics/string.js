const name = "Chandraprakash"
const surname = "Pandey"
let fullname = name + "-" + surname;
// console.log(fullname + 03);
console.log(`Hello my name is ${fullname} and my bday come on ${3} of October `);
// console.log(fullname[0]);
// console.log(fullname.length);
// console.log(fullname.toUpperCase());
console.log(fullname.charAt(20));
console.log(fullname.indexOf("p"));

const newString = fullname.substring(0,14)
console.log(newString);

const sliceString = fullname.slice(0,5)
console.log(sliceString);

const newString1 = "    hey     "
console.log(newString1);
console.log(newString1.trim()); // removed extra spaces

const url = "https://chandraprakashpandey.com/pandey%20"
console.log(url.replace("%20", "-"));

const string2 = "This is my name"
console.log(string2.split(" ")); //maded string a array