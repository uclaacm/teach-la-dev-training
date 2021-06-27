# TS and React Lifecycle
In this second session, we will be going over:
- Javascript
  - Functions
    - Arrow Functions
  - Arrays
  - Objects
  - Spread Operator Arrays and Maps
- Typescript
  - Why Typescript
- Functional Programming: Object.keys, map, forEach, reduce, find
- Imports
- Files
- Lists and Keys in React
- States and Props
   - Destructing Arrays and Maps
- Class based React (for your reference)
   - onMount, onDismount
   - State
- Why is Functional React Better

# TSX
## What did we learn last week?
TSX, how it is embedded React hidden and abstracted away
We can insert Javascript into JSX!
Just put it in brackets
```
        {
          // your javascript code
        }
```
# Javascript \<a subset of typescript!\>
## Functions
Take a look at App and see how it is a function, Javascript functions are like that 
### How would you create a function?
```
function meow() {
  return "meow meow meow";
}
```
## Arrow Functions
```
const meowArrow = () => "meow meow meow";
```
### How to have more than one line of code?
```
const meowArrowBrackets = () => {
  // can do other things here
  return "meow meow meow";
}
```
### Why Arrow Functions over Functions? <i>a little complex, feel free to skip</i>
- Cleaner
- Binding of `this`

In classic function expressions, the this keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it uses `this` from the code that contains the arrow function.
For example, look at the `setTimeout` function below:
```
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};
```
 
In the ES5 example, `.bind(this)` is required to help pass this context into the function. Otherwise, by default `this` would be `undefined`.
```
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};
```
 
ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.
 
Honestly, it’s kind of confusing, as a rule of thumb, I’d mainly make arrow functions if it is inside of anything else, and normal functions if it’s standalone.

A lil confusing, but you’ll get the hang of it as time goes on.

## Arrays
```
const cats = ["pickles", "oscar", "mittens", "boo"];
```
## Objects
```
const cat_owner = { "alli": "pickles" };
const cat_owners = {
  "alli": ["pickles", "oscar"],
  "melme": [], 
  "gude": ["bob", "sandy", "blue"]
}
```
## Const, Let, and Var 
[Here is a great explanation](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var/11444416#11444416)

Var - function scoped

Let - block scoped

Const - block scoped - can’t be reassigned
```
function loopThrough(array) {
  cat_owner.regina = "human"; // not an error because const itself isn't being assigned
  cat_onwer = {"alli": "human"};
 
  const x = 1; // error 1 const cant be reassigned
  for (x = 0; x < 5; x++){ 
    let number = 3;
  }
  console.log(number) // error 2 let is block scoped
 
  for(var i = 0; i < 5; i++){
  }
  console.log(i); // not an error because var is function scoped
}
```
If you don't know what's best, use `let` generally, and `var` on special occasions.

## Spread Operator Arrays and Maps
Opens up array / object to add more things in. This is super important and useful for states!! More on this later
```
function spreadOperatorDemo(array, object){
  const arr = [...array, "new thing for array"]
  const newObject = {"blehhh": "meow", ...newKeyAndValue}
}
```

# Typescript
## What is TypeScript?

[TypeScript](https://www.typescriptlang.org) is an open-source language built on top of JavaScript that addresses the issues of JavaScript being a dynamically typed language by adding **static type definitions.** (types that are determined at compile time)

![tsVisual](./pictures/tsVisual.png)

TypeScript is a **superset** of JavaScript which means that all JavaScript is valid TypeScript, but not all TypeScript is valid JavaScript.

### How Does TypeScript Work?

![tsVisual](./pictures/tsVisual.png)

#### [Compiled Vs Interpreted Languages](https://www.geeksforgeeks.org/difference-between-compiled-and-interpreted-language/)
While JavaScript is an **interpreted language**, which means that it gets read by an interpreter like a web-browser instead of compiled into machine code, TypeScript is a **compiled language** which means that TypeScript gets converted to JavaScript when you compile it, which offers a vast number of benefits!

* You can debug applications before they're being run, at compile-time.
* Your IDE can auto-fill properties of objects (with ctrl/cmd space).
* Compilation errors help reduce the chance of you making errors and help catch errors.

## Typescript Syntax
### Primitive Typing

Do you remember our [divideTwoNums function from earlier](#wrong-function-arguments)? 

Even though it expected two numbers, we were allowed to pass in parameters that were **not** numbers which gave us unintended results!

However with TypeScript's typing denoted by the `:` symbol, we can declare what are the types of return values of functions and the types of the function's arguments!

Let's take a look at the `divideTwoNums` function in JavaScript:

```js
function divideTwoNums(a,b){
    return a/b;
}
```

If we were to type this in TypeScript, it would be like this:

```ts
function divideTwoNums(a : number, b : number) : number {
    return a/b;
}
```

This means that the function's parameters, a and b are both numbers, and
the function `divideTwoNums` also returns a number!

This provides **type-safety** since we get compilation errors if we try calling `divideTwoNums` and a and b are not numbers!

```ts
/*Argument of type 'string' is not assignable to parameter of type 'number'*/
console.log(divideTwoNums("tree","chocolate"));
```

### Interfaces and Types
#### Interfaces
More than just simple typing of functions with primitives, TypeScript offers us a way to describe the **shape** of parameters and return values by providing an abstraction of the parameters we pass in!

Let's take a look at our `callPet` function in JavaScript again,
```js
function callPet(pet){
    return "Come here "+ pet.name.first + "!";
}
```

If we were to turn this into TypeScript, how do we know what is the type of the pet parameter?

TypeScript is a **duck-typed** language, which means that if it looks like a duck, acts like a duck, then it is a duck!

Duck-Typing is how **interfaces** are formed for TypeScript, and we can form them by looking at how we would want our parameters passed in as. Let's take a look at the pet object that we pass in.

```js
const newPet = {
    name: {
        first: "Rufus",
        last: "the Third"
    },
    type: "dog"
}
```

As we can see, the pet has a name object with a first and last field, as well as a type. To convert this to an interface, we essentially describe this `newPet` object in terms of its types!

```ts
interface Pet {
    name: {
        first: string,
        last: string
    },
    type: string
}
```

Now that we've declared that Pet objects have a name object with first and last fields of strings, as well as a type of string, we can pass in the interface as the type of `callPet`'s parameters!

```ts
function callPet(pet : Pet) : string{
    return "Come here " + pet.name.first + "!"
}
```

We can also type our objects through our interfaces like so:

```ts
const newPet : Pet = {
    name: {
        first: "Rufus",
        last: "the Third"
    },
    type: "dog"
}
```
#### Types
Even more confusing, sometimes you can define types, so you could do
// TODO: ADD HERE


## Object.keys, Object.entries, Object.values, map, forEach, reduce, find
[Take a look here for definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
```
Object.keys(cat_owners).reduce((prevVal, curKey) => {return prevVal +" "+ curKey + curKey}, "")
```
## Files and Imports
Remember what node_modules is? 
It’s the dependencies specified in the package.json file
### Public folder
Visible to the public by default
### App.test.js
Testing, hopefully I’ll have time for this later, but has to do with Continuous Integration and making sure things aren’t broken
### ReactDOM Render
Take a look at this https://reactjs.org/docs/rendering-elements.html 

### .gitignore
I’ll do a lil workshop or something, but as an overview, it’s files that git ignores by default when you git add .
### Linting
Making sure that everything conforms to a set of standards. EG all tabs are 2 spaces, all lines end with semicolon, etc (pull up playnet linter)

### Package-lock.json
Babel is a JavaScript compiler Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
### Lists and Keys 
```
          Object.entries(cat_owners).map(([key, value]) => 
            <div>
              {key} has {value.join(", ")} cats
            </div>
          )
```
Causes
`Warning: Each child in a list should have a unique "key" prop.`

This means that every item, every `div` needs to have a key.
This is because react renders this list by checking out whats different right, and it uses key to help determine whether to render a completely new object, or just modify it. 
This will come up again later
For more info, go here https://reactjs.org/docs/lists-and-keys.html#keys 
# React
## Class Based
This is getting phased out. I’m just showing yalls for reference!
```
class ComponentName extends React.Component {
  render() {
    return <div>HI I AM COMPONENT</div>;
  }
}
```
## State & Props
See here for more https://reactjs.org/docs/state-and-lifecycle.html

### How to add a state
``` 
class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return <div>HI I AM COMPONENT {this.state.date.toLocaleTimeString()}</div>;
  }
}
```
`componentDidMount`, `componentWillUnmount` => things happen when the Component starts up and when it is deleted
# Functional React
## State 
`useState` is basically the same as setting state
Remember to break up state with `[name, setName]`
Use `setName` to setup the new state so that React knows to rerender!
```
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {number}
        <button onClick={()=>setNumber(number+1)}/>
      </header>
    </div>
  );
}
```
## Props
This is the original input passed into a function
- Imagine this as the things you put into a constructor
```
function Cats(props) {
  return <div>{props.name}</div>;
}
function App() {
  const cat_owners = {
    "alli": 0,
    "melme": 0, 
    "gude": 0
  }
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {
          Object.entries(cat_owners).map(([key, _]) => 
          <Cats name={key}/>)
        }
        <button onClick={()=>setNumber(number+1)}/>
      </header>
    </div>
  );
}
```
Let’s combine these topics so that every time you press a button, the number of cats you own increases!
Let’s bring the button and number logic into the Cats function
```
function Cats(props) {
  const [number, setNumber] = useState(0);
  return <div>
    {props.name}
    <br/>
    {number}
    <br/>
    <button onClick={()=>setNumber(number+1)}>Like</button>
  </div>;
}
function App() {
  const cat_owners = {
    "alli": 3,
    "melme": 0, 
    "gude": 4
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          Object.entries(cat_owners).map(([key, _]) => 
          <Cats name={key}/>)
        }
      </header>
    </div>
  );
}
```
Now, let’s try to pass in the starting number!


Let’s add in the value from the map!
```
function Cats(props) {
  const [number, setNumber] = useState(props.startingPoint);
  return <div>
    {props.name}
    <br/>
    {number}
    <br/>
    <button onClick={()=>setNumber(number+1)}>Like</button>
  </div>;
}
function App() {
  const cat_owners = {
    "alli": 3,
    "melme": 0, 
    "gude": 4
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          Object.entries(cat_owners).map(([key, value]) => 
          <Cats name={key} startingPoint={value}/>)
        }
      </header>
    </div>
  );
}
```
## Why Functional
- Lightweight
- Easier to read
- Nice hooks (like the `useState` stuff)
- Performance boost
- Basically barely any pros for Class based, so I’d recommend defaulting to functional
# Summary
- Functions
- Arrow Functions
- Objects
- Arrays
- Imports
- Files
- Object.keys, map, forEach, reduce, find
- Lists and keys in React
- Handle onClick
- Destructing Arrays and Maps
- Class based React (for your reference)
      - onMount, onDismount
- States and Props
- Why are functional components are better
# <a name="tryout"></a>Intro mini project for this week
## Make an array of foods which you can either duplicate with a new number or something at the end or like or delete
- Specify 3 different foods
- Number Likes
- Button for the number of likes
- Foods duplicate
- Remove the foods

Challenge: add images corresponding to each food!

Note, don’t worry about having a different number of likes for every duplicate! We can work on this in the future

# Resources
We *highly recommend* [React's own "Main Concepts" tutorial](https://reactjs.org/docs/hello-world.html).

React:

* [Components and Props (React)](https://reactjs.org/docs/components-and-props.html)
* [State and Lifecycle (React)](https://reactjs.org/docs/state-and-lifecycle.html)
* [Handling Events (React)](https://reactjs.org/docs/handling-events.html)
* [Lists and Keys (React)](https://reactjs.org/docs/lists-and-keys.html)
* [Forms (React)](https://reactjs.org/docs/forms.html)
* [Composition vs Inheritance (React)](https://reactjs.org/docs/composition-vs-inheritance.html)
* [Thinking in React (React)](https://reactjs.org/docs/thinking-in-react.html)
* [Higher-Order Components (React)](https://reactjs.org/docs/higher-order-components.html)
* [JSX in Depth (React)](https://reactjs.org/docs/jsx-in-depth.html)
* [Optimizing Performance (React)](https://reactjs.org/docs/optimizing-performance.html)
* [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

Javascript:

* [this (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [Strict mode (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Classes (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [class (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
* [Arrow function expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [When to use arrow functions](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)

