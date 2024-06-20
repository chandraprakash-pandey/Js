let myanime = ["Naruto", "Sasuke", "Itachi"]
let anime_name = ["obito", "Madara", "Jiraya"]

// myanime.push(anime_name)
// console.log(myanime);
// console.log(myanime[3][1]);

const anime1 = myanime.concat(anime_name)
console.log(anime1); // same output as down

const anime2 = [...myanime, ...anime_name]
console.log(anime2); //same value as above

const my_array = [1,2,3,[4,5], 6, [7, 8], [2,3,[4,5]]]
const my_another = my_array.flat(Infinity)
console.log(my_another);

console.log(Array.isArray("Pandey"));
console.log(Array.from("Pandey"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));