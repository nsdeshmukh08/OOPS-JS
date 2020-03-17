/*
    - It gives you the ability of calling same method on different object.
    - Same action we can do in multiple way that is called as Polymorphism.

    - Below example show, everyone different type of sounds.
*/

function getSound(type){
    this.type = type;
}

getSound.prototype.getType = function(){
    return this.type;
}

function Human(type){
    this.type = type;
}

// Multiple ways of Inheritance.
//Human.prototype.__proto__ = getSound.prototype;
Human.prototype = Object.create(getSound.prototype);

Human.prototype.getType = function(){
    return 'Human => ' + this.type;
}

function Dog(type){
    this.type = type;
}
// Multiple ways of Inheritance.
//Dog.prototype.__proto__ = getSound.prototype;
Dog.prototype = Object.create(getSound.prototype);

Dog.prototype.getType = function(){
    return 'Dog => ' + this.type;
}

var arr = [new getSound('Global Sound OM'), new Human('Speaking'), new Dog('Barking')];

arr.forEach((obj)=>{
    console.log(obj.getType());
})
