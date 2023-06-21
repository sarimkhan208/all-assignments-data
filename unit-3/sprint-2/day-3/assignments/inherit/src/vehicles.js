
// Function constructor
function FourWheeler(wheels,model, color, speed, fuel) {
    this.model = model
    this.color = color
    this.speed = speed
    this.fuel = fuel
    this.wheels = wheels
    Object.setPrototypeOf(FourWheelerObject,this)
}
FourWheeler.prototype.setSpeed = function(s){
    this.speed = s
}
FourWheeler.prototype.updateColor = function(s){
    this.color = s
}
FourWheeler.prototype.updateFuel = function(s){
    this.fuel = s
}

// Parent object for Object.create
let FourWheelerObject = {};

// Store function contructor object here
var car1 = new FourWheeler("a","q","t","s","u")


// Store Object.create here
var car2 = Object.create(FourWheelerObject)
Object.setPrototypeOf(car2,car1)


export { car1, car2 };
