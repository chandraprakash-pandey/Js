let mynum = [1,2,3,4,5,6,7,8,9,10]

// let plus10 = mynum.map( (num) => num + 10 )
let plus10 = mynum.map( (num) => {return num + 10} )
console.log(plus10);