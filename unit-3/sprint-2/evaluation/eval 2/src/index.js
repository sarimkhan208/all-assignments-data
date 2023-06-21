// Problem 1. 

function Character() {
    this.name="unnamed"
}
Character.prototype.setName = function(name){
    this.name=name
}
let char = new Character()
console.log(char)
function Warrior() {
    Character.call(this)
    this.strength=0
}


Object.setPrototypeOf(Warrior.prototype,Character.prototype)

Warrior.prototype.increaseStrength = function(){
    this.strength+=100
}
Warrior.prototype.decreaseStrength = function(){
    this.strength-=100
}


let w = new Warrior()

function Knight() {
    Warrior.call(this)
    this.weapon="no weapon"
}
Object.setPrototypeOf(Knight.prototype,Warrior.prototype);

Knight.prototype.setWeapon = function(weapon){
    this.weapon = weapon
}
let k = new Knight()
k.setName("Willim")
k.setWeapon("bomb")
k.increaseStrength()
k.increaseStrength()
k.increaseStrength()
k.increaseStrength()
k.decreaseStrength()
// console.log(k)


// Problem 2.

class Vehicle {
    constructor(make){
        this.make = make
    }
    setMake(make){
        this.make = make
    }
}

class Car extends Vehicle{
    constructor(make,model){
        super(make)
        this.model=model
    }
}


class Truck extends Vehicle{
    constructor(make,bedSize){
        super(make)
        this.bedSize=bedSize
    }
}

class Motorcycle  extends Vehicle{
    constructor(make,engineSize){
        super(make)
        this.engineSize=engineSize
    }
}
let m = new Motorcycle("make","engi")
m.setMake("setmake")
console.log(m)

export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}