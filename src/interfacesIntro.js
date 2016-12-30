var santa = {
    numberOfKidsToVisit: 987654654,
    giveGift: function (callback) {
        callback(true);
    },
    fly: function () { }
};
var numberOfKidsToVisit = santa.numberOfKidsToVisit;
santa.fly();
function getNameAndAge2() {
    return {
        age: 27,
        name: 'Slava'
    };
}
var tuple2 = getNameAndAge2();
var someName = tuple2.name;
var fatSanta;
//fatSanta.eat(); 
