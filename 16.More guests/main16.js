"use strict";
// create array
let guestList = ["usman", "ayesha", "imran", "aiman"];
let dontCome = guestList[0];
console.log(dontCome, "will not come");
guestList.splice(0, 1, "shahrukh");
guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
// new 3 guest invite
console.log("Good News! we have found a bigger table for dinner.\n");
// add guest in start
guestList.unshift("mehmat");
// add guest in last
guestList.push("fatima");
// creatle variable for store middle index number
let middleIndex = (guestList.length / 2);
// add guest in middle
guestList.splice(middleIndex, 0, "babar");
console.log("updated list of our guests\n");
guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`));
