// Define the funcction to show magicians name.
function showMagicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

function makeGreat(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}

// Define an array  of magicians names
let magicianNames = ["M Mujahid","Chris angel","Raju jadugar"];

// making a copy of original array through .slice() function.
let copyMagicianNames = magicianNames.slice()

// making a copyied array to include "The Great" with their names.
let copyGreatMagicians = makeGreat(copyMagicianNames);

// show both array original & copied

// original
console.log("original")
showMagicians(magicianNames);

// copied
console.log("copy")
showMagicians(copyGreatMagicians);
