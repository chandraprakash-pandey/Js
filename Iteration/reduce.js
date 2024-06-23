const mynum = [1,2,3]

const addmynum = mynum.reduce( (accumulator, currentvalue)  => {
    // console.log(`Accumulaor value:- ${accumulator}, current value :- ${currentvalue}`);
    return accumulator + currentvalue
}, 3 /* Accumulator start value */)

// console.log(addmynum);

const myCart = [
    {coursename: "js course", price: 199},
    {coursename: "cpp course", price: 299},
    {coursename: "py course", price: 399},
    {coursename: "rb course", price: 499}
]

const totalprice = myCart.reduce((acc, item) => acc + item.price,0)

console.log(totalprice);