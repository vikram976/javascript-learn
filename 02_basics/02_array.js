const companyName = ["bmw", "ducati", "bugaati", "lamborghini", "ferari"]
const modelName = ["huraacan", "laferari", "chirone", "m-series", "r8"]
 
//companyName.push(modelName)
//console.log(companyName);

//let newList = companyName.concat(modelName)
//console.log(newList);
let freshList= [...companyName, ...modelName]
console.log(freshList);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));