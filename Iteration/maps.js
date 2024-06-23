let mynum = [1,2,3,4,5,6,7,8,9,10]

// let plus10 = mynum.map( (num) => num + 10 )
// let plus10 = mynum.map( (num) => {return num + 10} )

// chaining 

const newnum = mynum.map( (num) => num *10 ).map( (num) => num+1 ).filter((nums) => nums>40)

// console.log(plus10);
console.log(newnum);