const myarr = ["js", "py", "cpp", "html"]

// myarr.forEach(function (item) {
//     console.log(item);
// })

// myarr.forEach( (item) => {
//     console.log(item);
// } )

// printme = (item) => {
//     console.log(item);
// }

// myarr.forEach(printme)

// myarr.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

let myarrobj = [
    {name:"Pandey", rollno: 44},
    {name:"chandraprkash", rollno: 45},
    {name:"Rohan", rollno: 46}
]

myarrobj.forEach( (item) =>{
    console.log(item.name);
} )