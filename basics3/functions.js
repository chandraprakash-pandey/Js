function saymyname(){
    console.log("Chandraprakash Pandey");
}

// saymyname()

function addTwoNumber(num1, num2){ // inside that parameter are there
    // console.log(num1+num2)
    // let result = num1+num2;
    // return result;
    return num1+num2;
}

// addTwoNumber(2,3) // inside that arguments are there
const result = addTwoNumber(2,3);
// console.log(result);

// function isLoggedIn(Name){
//     if(Name === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `Hello ${Name}`;
// }
function isLoggedIn(Name = "Yoo"){ //here bydeault value will be yoo
    if(!Name){
        console.log("Please enter a username");
        return
    }
    return `Hello ${Name}`;
}

// console.log(isLoggedIn("Pandey"))
// console.log(isLoggedIn())

function newq(a = 3,b,c){
    console.log(a,b,c);
}

// newq(3,5)

function cartprice(val1, ...totalprice){
    return totalprice
}

// console.log(cartprice(100,200,300,400))

const obj = {
    name: "Pandey",
    age: 18,
    cllg: "MMCOE"
}

function objfun(anyobject){
    console.log(`My name is ${anyobject.name} and my age is ${anyobject.age}`)
}

// objfun(obj);
objfun({
    name: "sam",
    age: 21
})

const arr = [100,200,300,400]

function returnarr(anyarray){
    console.log(`Value of second index ${anyarray[2]}`)
}

// returnarr(arr)
returnarr([1,2,3,4])