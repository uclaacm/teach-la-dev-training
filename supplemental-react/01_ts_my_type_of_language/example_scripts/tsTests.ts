
//TYPES
function divideTwoNums(a : number ,b : number) : number{
    return a/b;
}
//console.log(divideTwoNums(8,4));

//console.log(divideTwoNums("apple","banana"));


//INTERFACES

let myPet : Pet = {
    name: {
        first: "Rufus",
        last: "The Third"
    },
    type: "dog"
}

myPet = {
    name: {
        first: "Rufus",
        middle: "Or",
        last: "The Third"
    },
    type: "dog"
}

interface Pet {
    name: {
        first: string;
        middle?: string;
        last: string;
    },
    type : string
}


function callPet(pet : Pet){
    return "Come here, " + pet.name.first;
}

console.log(callPet(myPet));

//console.log(callPet("Rufus"));