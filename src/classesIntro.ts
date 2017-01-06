// Video for this file:
// https://youtu.be/kRlCm1XT95w

class Car {
    private static SERIES_NUMBER = 0;

    private _seriesNumber: number;

    private _ownerName: string;

    private constructor(public brandName: string){
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;
    }

    public static BuildCar(brandName: string): Car {
        return new Car(brandName);
    }

    public static BuyCar(brandName: string,
        ownerName: string): Car{
        let car = new Car(brandName);
        car.ownerName = ownerName;

        return car;
    }

    public startCar(): void {
        this._startEngine();
    }

    private _startEngine(): void {
    }

    public get seriesNumber(): number {
        return this._seriesNumber;
    }

    public get ownerName(): string{
        return this._ownerName;
    }

    public set ownerName(name: string) {
        // Do some validation on the name..
        this._ownerName = name;
    }
}

let car = Car.BuyCar('Mazda', 'Slava');
car.startCar();
console.log('Brand number:', car.brandName);
console.log('Series number:', car.seriesNumber);
console.log('Owner name:', car.ownerName);

let car2 = Car.BuyCar('Mazda', 'Other name');
console.log('Brand number 2:', car2.brandName);
console.log('Series number 2:', car2.seriesNumber);
console.log('Owner name:', car2.ownerName);