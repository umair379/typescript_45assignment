"use strict";
let currentUsers = ["usman", "babar", "umair", "Nimra", "Ayesha"];
let newUsers = ["umair", "hamza", "sana", "Nimra", "bilal"];
// loop through new_users to check for user_names available
for (let newOneUser of newUsers) {
    let OurCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase());
    if (OurCondition) {
        console.log(`sorry ${newOneUser} is already taken!`);
    }
    else {
        console.log(`this username ${newOneUser} is available`);
    }
}
// newUsers.forEach(newOneUser => {
//     let ourCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())
//     if(currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase())){
//         console.log(`sorry ${newOneUser} is already taken!`)
//     }
//     else{
//         console.log(`this username ${newOneUser} is available`)
//     }
// })
