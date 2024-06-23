const myobj = {
    cpp: "c++",
    js: "JavaScript",
    rb: "Ruby"
}

for (const key in myobj) {
    // console.log(`key of myObj is ${key} and value of that key is ${myobj[key]}`);
}

const myarr = [4,2,6,8,4,4,7]

for (const index in myarr) {
    // console.log(`Index ${index} for ${myarr[index]}`);
}

let map = new Map()
map.set("IN", "Indian")
map.set("FR", "France")
map.set("SR", "Shri Lanka")
map.set("IN", "Indian")

for (const key in map) {
    console.log(map); // Iteration can't be done on map
}
console.log("hi");