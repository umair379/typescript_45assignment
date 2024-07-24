let apple = "apple";
let upperCaseApple = "APPLE";
let fruits = ["apple","banana","orange"]

//  test for equality & inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple"); //true

console.log("is apple is not equal to apple?");
console.log(apple != "apple"); //false


//test using lowercase function
console.log("is Apple is equal to apple after convverting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple"); //true

console.log("is APPLE is not equal to apple after converting to lowerCase");
console.log(upperCaseApple.toLowerCase() != "apple"); //false


let ten = 10;
let twenty = 20;
//numerical tests
console.log("is ten is equal to twenty?");
console.log(ten == twenty); //false

console.log("is ten not equal to twenty?");
console.log(ten != twenty); //true

console.log("is ten is greater than zero?");
console.log(ten > 0); //true

console.log("is twenty is less than 10?");
console.log(twenty < 10); //false

console.log("is ten is greater than or equal to 10?");
console.log(ten >= 10); //true

console.log("is twenty is less than or equal to 10?");
console.log(twenty <= 10); //false

// tests using "and" operator
console.log("twenty is not equal to 10 & twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); // true && true
// true

console.log("twenty is not equal to 10 & twenty is greater than 30");
console.log(twenty != 10 && twenty > 30); // true && false
// false

// tests using "or" operator
console.log("20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20); // false || true
// true

console.log("20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20); // false || flase
// false


//tests whether an item is include in array
console.log("is orange include in my fruits array");
console.log(fruits.includes("orange"));
// true

//not include
console.log("is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
// false
