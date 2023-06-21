let animal = ['cat', 'dog', 'elephant', 'bee', 'ant'];
console.log(animal.sort())


let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
console.log(animals);
