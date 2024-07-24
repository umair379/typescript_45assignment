"use strict";
let transportation = ["car", "bike", "cycle", "van"];
for (let vehi of transportation) {
    console.log(`I would like to own a ${vehi}`);
}
transportation.forEach(vehi => console.log("I would like to own a", vehi));
/*Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/ 
