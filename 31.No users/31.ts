// version1
let userNames = ["Usman","Babar","Admin","Nimra","Amna"];

if(userNames.length === 0){
    console.log("your Array is empty we need to find some users!");
}
else{
    for(let oneUser of userNames){
        if(oneUser === "Admin"){
            console.log(`hello ${oneUser}, would you like to see a status report?`);
        }
        else{
            console.log(`hello ${oneUser}, thank you for logging in again`);
        }
    }
}

// version2
let userNames2 = [];

if(userNames2.length === 0){
    console.log("your Array is empty we need to find some users!");
}
else{
    userNames2.forEach(oneUser2 => {
        if(oneUser2 === "Admin"){
            console.log(`hello ${oneUser2}, would you like to see a status report?`);
        }
        else{
            console.log(`hello ${oneUser2}, thank you for logging in again`);
        }
    }
    )
}