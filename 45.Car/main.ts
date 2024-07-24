// Define a function to create a car object with optional options
function createCar(manufacturer,model,...options){

// initialize a car object with manufacturer & model.
let car = {
    manufacturer : manufacturer,
    model : model
};

// add additional options to the car object
options.forEach(option => {
    let [key,value] = option.split(":")

    car[key.trim()] = value.trim();
});

return car

}

// call the function to create a car object
let myCar = createCar("Hyundai","new santro","color:silver","bloodProof:no")
console.log(myCar);