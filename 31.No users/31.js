// version1
var userNames = ["Usman", "Babar", "Admin", "Nimra", "Amna"];
if (userNames.length === 0) {
    console.log("your Array is empty we need to find some users!");
}
else {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var oneUser = userNames_1[_i];
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again"));
        }
    }
}
// version2
var userNames2 = [];
if (userNames2.length === 0) {
    console.log("your Array is empty we need to find some users!");
}
else {
    userNames2.forEach(function (oneUser2) {
        if (oneUser2 === "Admin") {
            console.log("hello ".concat(oneUser2, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser2, ", thank you for logging in again"));
        }
    });
}
