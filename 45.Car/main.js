// Define a function to create a car object with optional options
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacturer & model.
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var myCar = createCar("Hyundai", "new santro", "color:silver", "bloodProof:no");
console.log(myCar);
