// for

for (let i = 0; i < 10; i++) {
    if(i == 5){
        // console.log(`${i}, is best number`);
    }
//    console.log(i);
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value: ${j}`);
        
    }
    
}

let myarray = ["Jiraya", "Itachi", "Pain"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}