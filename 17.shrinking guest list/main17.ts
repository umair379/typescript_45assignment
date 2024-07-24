let guestList = ["usman","ayesha","imran","aiman"];

let dontCome = guestList[0];

console.log(dontCome, "nahi ayega\n");

// remove usman & add shahrukh
guestList.splice(0,1,"shahrukh");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));

// new guest invite
console.log("Good News! we have found a bigger table for dinner.\n");

// add guest in start
guestList.unshift("mehmat");

// add guest in last
guestList.push("fatima");

let middleIndex:number = (guestList.length / 2);
guestList.splice(middleIndex, 0, "babar");

console.log("updated list of our guests\n");

guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`));
// line break
console.log()

// shrinking guest list
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me\n");

// removed all guest without two guests
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} i cant invite you to dinner`);
};
// line break
console.log()

// last two guests invited
console.log("invitations to the last 2 guests\n");
guestList.forEach(lastTwo => console.log(`luckly ${lastTwo}, you are still invited to dinner`));

// line break
console.log()

// last two guests also removed
guestList.pop();
guestList.pop();

console.log("empty list:", guestList);