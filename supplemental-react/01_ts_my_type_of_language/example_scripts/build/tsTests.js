"use strict";
//TYPES
function divideTwoNums(a, b) {
    return a / b;
}
//console.log(divideTwoNums(8,4));
//console.log(divideTwoNums("apple","banana"));
//INTERFACES
var myPet = {
    name: {
        first: "Rufus",
        last: "The Third"
    },
    type: "dog"
};
myPet = {
    name: {
        first: "Rufus",
        middle: "Or",
        last: "The Third"
    },
    type: "dog"
};
function callPet(pet) {
    return "Come here, " + pet.name.first;
}
console.log(callPet(myPet));
//console.log(callPet("Rufus"));
