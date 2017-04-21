interface Santa {
    readonly numberOfKidsToVisit: number;
    weight?: number;
    giveGift(callback: GiftGivenCallback): void;
    drinkMilk?(): void;
}
interface Santa {
    fly(): void;
}
interface FatSanta extends Santa {
    eat(): void;
}
interface GiftGivenCallback {
    (success: boolean): void;
}
declare let santa: Santa;
declare let numberOfKidsToVisit: number;
declare function getNameAndAge2(): {
    name: string;
    age: number;
};
declare let tuple2: {
    name: string;
    age: number;
};
declare let someName: string;
declare let fatSanta: FatSanta;
