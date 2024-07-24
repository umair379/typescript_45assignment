"use strict";
let guestList = ["usman", "ayesha", "imran", "aiman"];
let dontCome = guestList[2];
console.log(dontCome, "nahi ayega");
guestList.splice(2, 1, "shahrukh");
for (let guest of guestList) {
    console.log(`salam ${guest}, would you like to dinner with me?`);
}
// guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
