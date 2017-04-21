declare class Car {
    brandName: string;
    private static SERIES_NUMBER;
    private _seriesNumber;
    private _ownerName;
    private constructor(brandName);
    static BuildCar(brandName: string): Car;
    static BuyCar(brandName: string, ownerName: string): Car;
    startCar(): void;
    private _startEngine();
    readonly seriesNumber: number;
    ownerName: string;
}
declare let car: Car;
declare let car2: Car;
