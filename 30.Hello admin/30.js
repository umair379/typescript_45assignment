"use strict";
// creating array
let userNames = ["usman", "babar", "admin", "nimra", "amna"];
// 1st method
for (let oneUser of userNames) {
    if (oneUser === "admin") {
        console.log(`hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`hello ${oneUser}, thank you for logging in again`);
    }
}
// 2nd method
// userNames.forEach(oneUser => {
//     if(oneUser === "admin"){
//         console.log(`hello ${oneUser}, would you like to see a status report?`);
//     }
//     else{
//         console.log(`hello ${oneUser}, thank you for logging in again`);
//     }
// }
// )
