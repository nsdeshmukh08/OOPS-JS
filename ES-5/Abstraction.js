/*
    Point to be noted in case of Abstraction 
    - You can not create instance of a Abstract class.
    - Meaning of Abstraction is hiding certain details and only show the essentials one.
*/

function Vehicle(name){
    this.name = name;
    throw new Error('Vehicle is a Abstract class you can not create instance of it.');
}

Vehicle.prototype.getVehicleName = function(){
    return this.name;
}

function Bike(name){
    this.name = name;
}
// Object are passed by reference hence create a new copy of prototype object.
Bike.prototype = Object.create(Vehicle.prototype);

var bike = new Bike('Pulser 150');

console.log(" ===>", bike.getVehicleName());