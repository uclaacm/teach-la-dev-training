"use strict";
//BEHAVIOR YOU DON'T WANT
function divideTwoNums(a, b) {
    return a / b;
}
//console.log(divideTwoNums(8,4));
//console.log(divideTwoNums("tree","chocolate"));
//CRASHING BEHAVIOR
var myPet = "Rufus";
var newPet = {
    name: {
        first: "Rufus",
        last: "the Third"
    },
    type: "dog"
};
function callPet(pet) {
    return "Come here " + pet + "!";
}
console.log(callPet(myPet));
//transpiling
var arr = [1, 2, 3, 4, 5];
var func = function (arr) {
    arr.forEach(function (num) { return console.log(num); });
};
//console.log(func(arr));
