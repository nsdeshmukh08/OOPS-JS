/*
    - It gives you the ability of calling same method on different object.
    - Same action we can do in multiple way that is called as Polymorphism.

    - Below example show, everyone different type of sounds.
*/

class getSound {
    constructor(type){
        this.type = type;
    }

    getType(){
        if(this.constructor == getSound){
            return 'Global Sound ==> ' + this.type;
        }
        return this.type;
    }
}

class Human {
    constructor(type){
        this.type = type;
    }

    getType(){
        return 'Human ==> ' + this.type;
    }
}

class Dog {
    constructor(type){
        this.type = type;
    }

    getType(){
        return 'Dog ==> ' + this.type;
    }
}

var arr = [new getSound('OM'), new Human('Speaking'), new Dog('Barking')];

arr.forEach((obj)=>{
    console.log(obj.getType());
})
