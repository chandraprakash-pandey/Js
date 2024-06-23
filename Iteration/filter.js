const lang = ["js", "html", "css", "cpp"]

// let values = lang.forEach( (item) => {
    // console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let values = []

// myNums.forEach( (item) => {
//     if(item>4){
//         values.push(item)
//     }
// } )

// console.log(values);

let values = myNums.filter( (item) => {
    return item > 4
} )

console.log(values);

let books = [
    {name: "Loyal", theme: "Thriller", year: 1981},
    {name: "Space", theme: "murder", year: 1983},
    {name: "earth", theme: "murder", year: 1985},
    {name: "Mirror", theme: "Thriller", year: 1987},
    {name: "India", theme: "Romantic", year: 1990},
    {name: "Permanu", theme: "Thriller", year: 1993},
    {name: "China", theme: "Thriller", year: 1995},
    {name: "The great war", theme: "murder", year: 1981}
]

let userbook = books.filter( (bk) => bk.theme === "Thriller" &&  bk.year > 1990)
// userbook = books.filter( (bk) => {return bk.year > 1990} )
console.log(userbook);
// console.log(useryear);