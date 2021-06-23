
//BEHAVIOR YOU DON'T WANT
function divideTwoNums(a: number, b: number): number{
    return a/b;
}

//console.log(divideTwoNums(8,4));

//console.log(divideTwoNums("tree","chocolate"));

//CRASHING BEHAVIOR
// const myPet = "Rufus";
// type Pet = string;
// // function callPet(pet : Pet) : string{
// //     return "Come here " + pet + "!"
// // }

// const newPet = {
//     name: {
//         first: "Rufus",
//         last: "the Third"
//     },
//     type: "dog"
// }




interface Pet {
    name: {
        first: string,
        last: string
    },
    type: string
}

function callPet(pet : Pet) : string{
    return "Come here " + pet.name.first + "!"
}

//this gives us errors!
//console.log(callPet(myPet));
//console.log(callPet(newPet));





//transpiling
// const arr = [1,2,3,4,5]
// let func = (arr: Array<number> ) =>{
//     arr.forEach(num=>console.log(num))
// }
//console.log(func(arr));