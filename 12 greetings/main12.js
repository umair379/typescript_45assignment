"use strict";
let myFriends = ["Shahrukh", "Hunaid", "Faisal", "izhan"];
for (let oneFriend of myFriends) {
    console.log(`Good morning ${oneFriend} how are you?`);
}
myFriends.forEach(oneFriend => console.log("Good morning,", oneFriend, "how are you?"));
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/ 
