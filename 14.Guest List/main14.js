"use strict";
let guestList = ["Izhan", "Hunaid", "Shahrukh", "Faisal"];
for (let guest of guestList) {
    console.log(`Good Morning, ${guest} would you like to come to dinner with me`);
}
guestList.forEach(guest => console.log("Good Morning,", guest, "would you like to come to dinner with me"));
/*If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/ 
