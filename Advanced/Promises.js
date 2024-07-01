const PromiseOne = new Promise(function (resolve,reject){
    // Any Async Task
    //DB Task

    setTimeout(() => {
        console.log("Async Task is completed");
        resolve()
    }, 1000);
})

PromiseOne.then(() => {
    console.log("Promise Consumed");
})

//  OR

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async 2 Completed");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 consumed");
})

const PromiseThree = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve({Username: "Pandey", email: "chandraprakash@gmail.com"}) // agar kahi se kuch info lena hia toh
    }, 1000);
})

PromiseThree.then(function(takenData){
    console.log(takenData);
})

const PromiseFour = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = false
    if(!error){
        resolve({surname: "Pandey", password: "123"})
    } else{
        reject("Something went Wrong please try again later")
    }
    }, 1000);
})

PromiseFour.then((info) => {
    console.log(info);
    return info.surname
}).then((surname) => {
    console.log(surname);
}).catch((err) => {
    console.log(err);
}).finally(() =>{
    console.log("The promise is either done or failed");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
    if(!error){
        resolve({surname: "JavaScript", password: "123"})
    } else{
        reject("JS went Wrong please try again later")
    }
    }, 1000);
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()

// async function getalluser() {
//     try {
//         const responce = await fetch("https://api.github.com/users/chandraprakash-pandey")
//         const data = await responce.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getalluser()

// OR


fetch("https://api.github.com/users/chandraprakash-pandey")
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
