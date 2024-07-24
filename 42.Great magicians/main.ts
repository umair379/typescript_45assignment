// Define the funcction to show magicians name.
function showMagicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// define function and map method with including "The Great"
function makeGreat(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}

// Define an array  of magicians names
let magicianNames = ["M Mujahid","Chris angel","Raju jadugar"];

// store map method
let greatMagicians = makeGreat(magicianNames);
// console.log(greatMagicians);

showMagicians(greatMagicians)