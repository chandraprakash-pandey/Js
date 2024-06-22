let useremail = "cp.o.pandey@gmail.com"

if (useremail) {
    console.log("Got email");
} else {
    console.log("Don't have user email");
}

// falsy value 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

//"0", "false", " ", [], {}, function(){}

const emptyarray = []

if (emptyarray.length === 0) {
    console.log("Array is empty");
}

const emptyobj = {}

if(Object.keys(emptyarray).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = null ?? undefined ?? 30 ?? 100
val1 = undefined ?? null
console.log(val1);

// Terniary Operator jut like if else 

// condition ? True : False

const chai = 100

// chai <50 ? console.log("Chai price is less than 50") : console.log("Chai price is more thann 50");