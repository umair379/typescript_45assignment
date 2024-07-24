"use strict";
// Define a function with a rest parameter the accept items arguments representing our sandwiches
function makeSandwiches(...items) {
    console.log("\n making a sandwich with the following items: \n");
    for (let singleItem of items) {
        console.log(singleItem);
    }
    // items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now Enjoy Sandwich");
}
// call the function 3 times with 3 different number of arguments
makeSandwiches("chicken", "cheese", "mayo", "egg");
makeSandwiches("bread", "buter");
makeSandwiches("bread", "butter", "chicken", "egg", "tomatto", "sauce", "cornslaw", "onion");
