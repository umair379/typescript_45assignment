"use strict";
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Ankara", "turkey");
