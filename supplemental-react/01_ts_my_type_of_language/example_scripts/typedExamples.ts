//multiply two numbers
function multiplyTwoNums(a : number,b : number) : number{
    return a*b;
  }
  
  
  
  //types/interfaces
  //greetPerson

  interface Person  {
      name: string;
      pronouns: string;
  }

  const mattchoo : Person  = {
    name: "Matt",
    pronouns: "he/him",
  };

  function greetPerson(person: Person) : string {
    return "Hello there, " + person.name + " (" + person.pronouns + ")!";
  }


  //console.log(greetPerson(mattchoo));
  

  //typing objects

  //Add Ages of two rocks
  interface Rock {
    type: string
    age: number
  }

  const smithsonian : Rock = {
    type: "obsidian",
    age: 40
  }
  
  const moma : Rock = {
    type: "diamond",
    age: 200
  }
  function sumAges(first : Rock, second : Rock) : number{
    return first.age + second.age;
  }
  
  //console.log(sumAges(smithsonian, moma));
  