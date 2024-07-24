"use strict";
//1st option
let myFriends1 = ["Shahrukh", "Hunaid", "Faisal", "Izhan"];
console.log(myFriends1);
//2nd option
let myFriends2 = ["Shahrukh", "Hunaid", "Faisal", "Izhan"];
for (let oneFriend of myFriends2) {
    console.log(oneFriend);
}
myFriends2.forEach(oneFriend => console.log(oneFriend));
/*Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/ 
