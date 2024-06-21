// Immediately Invoked Function Expression IIFE
// to run function immedeately and free polute from Global scope

// function chai(){
//     console.log(`DB Connected`);
// }

// chai()

(function chai(){ // Named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`My name is ${name}`);
} )(`Chandraprakash Pandey`);
