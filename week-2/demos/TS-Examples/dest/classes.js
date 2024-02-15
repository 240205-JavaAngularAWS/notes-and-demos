"use strict";
// So we can create class in TS to define data types with methods, fields etc
// We can actually do this in JS too but since TS is OO, there's more of a focus on creating the datatypes themselves
class Animal {
    // Constructor
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    // Getters and Setters
    get getSpecies() {
        return this.species;
    }
    set setSpecies(sp) {
        this.species = sp;
    }
    move(feet) {
        console.log(`${this.name} moved ${feet} feet`);
    }
}
// So now I can create a new object of the Animal class and it will have the properties mentioned
let perry = new Animal("perry", "platypus");
// We use the new keyword to create an object of a class
// Now we should see if we can directly access the fields
console.log(perry.name);
// So this is technically valid code but since we're doing OOP, we should consider the pillars associated with it
console.log(perry.getSpecies);
perry.move(5);
// If we try to update a readonly value
// perry.name = "not perry"
// In essence this is the same as the final keyword in Java when applied to fields
// We can also inherit classes 
class Dog extends Animal {
    bark() {
        console.log("Arf Arf");
    }
    // We can override a parent method
    move(feet) {
        console.log(`The dog moved ${feet} feet`);
    }
}
let cash = new Dog("Cash", "Pit Bull");
cash.move(0);
cash.bark();
// There is also abstraction
class Car {
    alarm() {
        console.log("BEEP BEEP BEEP");
    }
}
class Jeep extends Car {
    playRadio() {
        console.log("The jeep played the radio");
    }
    drive() {
        console.log("The jeep drove very poorly");
    }
}
let greenJeep = new Jeep(); // Liskov principle at work
greenJeep.alarm();
greenJeep.drive();
greenJeep.playRadio();
