//BEHAVIOR YOU DON'T WANT
// function divideTwoNums(a,b){
//     return a/b;
// }

// console.log(divideTwoNums(8,4));

// console.log(divideTwoNums("tree","chocolate"));


//TODO: show refactoring functions and interfacing with objects


//CRASHING BEHAVIOR
const myPet = "Rufus";

const newPet = {
    name: {
        first: "Rufus",
        last: "the Third"
    },
    type: "dog"
};

function callPet(pet){
    return "Come here "+ pet.name.first + "!";
}

console.log(callPet(myPet));

//error!
console.log(callPet(newPet));
