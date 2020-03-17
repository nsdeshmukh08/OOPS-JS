/*
    Point to be noted in case of Abstraction 
    - You can not create instance of a Abstract class.
    - Meaning of Abstraction is hiding certain details and only show the essentials one.
*/

class Vehicle{
    constructor(name){
        this.name = name;
        if (this.constructor == Vehicle) {
            throw new Error("Vehicle is a Abstract class you can not create instance of it.");
        }
    }

    getVehicleName(){
        return this.name;
    }
}

class Bike extends Vehicle{
    constructor(name){
        super();
        this.name = name;
    }
}

var bike = new Bike('Pulser 150');

console.log(" ===>", bike.getVehicleName());