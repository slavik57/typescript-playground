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

let santa: Santa = {
    numberOfKidsToVisit: 987654654,
    giveGift: (callback: GiftGivenCallback) => {
        callback(true);
    },
    fly: () => {}
};

let numberOfKidsToVisit =
    santa.numberOfKidsToVisit;

santa.fly();

function getNameAndAge2()
    : { name: string, age: number } {
    return {
        age: 27,
        name: 'Slava'
        };
}

let tuple2 = getNameAndAge2();

let someName = tuple2.name;

let fatSanta: FatSanta;
//fatSanta.eat();