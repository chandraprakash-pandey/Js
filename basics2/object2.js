// const tinder = new Object() //singelton
const tinder = {}
tinder.id = "12345";
tinder.name = "Pandey";
tinder.isLoggedIn = false;

// console.log(tinder);

const regularUser = {
    email: "cp.o.pandey@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Chandraprakash",
            lastname: "Pandey"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}


// const obj4 = {...obj1, ...obj2} same output
const obj4 = Object.assign({} , obj1 , obj2) // same output its good to use
// const obj4 = Object.assign( obj1 , obj2) // same output
// console.log(obj4);


const obj3 = {...obj1, ...obj2} // most used use this
// console.log(obj3);

console.log(tinder);
console.log(Object.keys(tinder)); // access all keys in array
console.log(Object.values(tinder));