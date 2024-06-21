let a = 10 // Global Scope
const b = 20
// var c = 30 //its not good as its value changes in block scope

if(true){
    let a = 100 // block scope
    const b = 200
    // var c = 300
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name = "Chandraprakash"

    function two(){
        const surname = "Pandey"
        // console.log(name);
    }
    two()
    // console.log(surname);
}

one()


// ++++++++++++++++++++++++++++++++++++++++++
addOne(3)

function addOne(num){
    return num + 1
}

// addTwo(3) // here it will show error as variable can't be access before it is made

const addTwo = function(num1){
    return num1 + 2
}

addTwo(3)