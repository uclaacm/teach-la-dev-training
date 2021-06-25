//multiply two numbers
function multiplyTwoNums(a,b){
  return a*b;
}



//greetPerson

const mattchoo = {
  name: "Matt",
  pronouns: "he/him",
};

function greetPerson(person) {
  return "Hello there, " + person.name + " (" + person.pronouns + ")!";
}

//console.log(greetPerson(mattchoo));

//Add Ages of two rocks

const smithsonian = {
  type: "obsidian",
  age: 40
}

const moma = {
  type: "diamond",
  age: 200
}

function sumAges(first, second){
  return first.age + second.age;
}

//console.log(sumAges(smithsonian, moma));
