// Video for this file:
// https://youtu.be/kRlCm1XT95w
class Car {
    constructor(brandName) {
        this.brandName = brandName;
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }
    static BuildCar(brandName) {
        return new Car(brandName);
    }
    static BuyCar(brandName, ownerName) {
        let car = new Car(brandName);
        car.ownerName = ownerName;
        return car;
    }
    startCar() {
        this._startEngine();
    }
    _startEngine() {
    }
    get seriesNumber() {
        return this._seriesNumber;
    }
    get ownerName() {
        return this._ownerName;
    }
    set ownerName(name) {
        // Do some validation on the name..
        this._ownerName = name;
    }
}
Car.SERIES_NUMBER = 0;
let car = Car.BuyCar('Mazda', 'Slava');
car.startCar();
console.log('Brand number:', car.brandName);
console.log('Series number:', car.seriesNumber);
console.log('Owner name:', car.ownerName);
let car2 = Car.BuyCar('Mazda', 'Other name');
console.log('Brand number 2:', car2.brandName);
console.log('Series number 2:', car2.seriesNumber);
console.log('Owner name:', car2.ownerName);
