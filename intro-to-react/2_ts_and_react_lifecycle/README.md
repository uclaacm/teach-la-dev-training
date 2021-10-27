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
- Functional Programming: forEach, map, reduce
- Lists and Keys in React
- States and Props
- Class based React (for your reference)
   - onMount, onDismount
   - State
- Why is Functional React Better

Here's a video of [this session](https://drive.google.com/file/d/1oHhoiLqkuG8kSIeLeIwDTzpl1VwM1a4g/view?usp=sharing)!

[We also have a little tryout if you want to practice yourself!](#tryout)

# TSX
## What did we learn last week?
TSX, how it is embedded React hidden and abstracted away
We can insert Javascript into JSX!
Just put it in brackets
```tsx
  <div>
    some HTML/CSS looking like things
        {
          // your javascript code
        }
   </div>
```
## What is TypeScript?

[TypeScript](https://www.typescriptlang.org) is an open-source language built on top of JavaScript that addresses the issues of JavaScript being a dynamically typed language by adding **static type definitions.** (types that are determined at compile time)

![tsVisual](./images/tsVisual.png)

TypeScript is a **superset** of JavaScript which means that all JavaScript is valid TypeScript, but not all TypeScript is valid JavaScript.

# Javascript \<a subset of typescript!\>
## Functions
Take a look at App and see how it is a function, Javascript functions are like that 
### How would you create a function?
```tsx
function meow() {
  return "meow meow meow";
}
```
## Arrow Functions
```tsx
const meowArrow = () => {
 return "meow meow meow";
}
```
### Why Arrow Functions over Functions? <i>a little complex, feel free to skip</i>
- Cleaner (shorthand as `const meowArrow = () => "meow meow meow";`)
- Binding of `this`

In classic function expressions, the this keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it uses `this` from the code that contains the arrow function.
For example, look at the `setTimeout` function below:
```tsx
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
```tsx
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

### Rule of Thumb
 
Honestly, it’s kind of confusing, as a rule of thumb, I’d mainly make arrow functions if it is inside of anything else, and normal functions if it’s standalone.

A lil confusing, but you’ll get the hang of it as time goes on.

## Arrays
```tsx
const cats = ["pickles", "oscar", "mittens", "boo"];
```
## Objects
```tsx
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
```tsx
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
```tsx
function spreadOperatorDemo(array, object){
  const arr = [...array, "new thing for array"]
  const newObject = {"blehhh": "meow", ...newKeyAndValue}
}
```

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
Even more confusing, sometimes you can define types, so you could do something like this
```tsx
type pets = Pet[];
```
or
```tsx
type Person = Man | Woman;
```
or
```tsx
type Person = {
  name: string,
  age: number
};
```
This last one is really similar to interfaces, but it's easier to "extend" off of interfaces.

#### When to use type vs interface
Interfaces are better when you need to define a new object or method of an object. Types are better when you need to create functions. After some practice, you'll feel out which one is best for which use case.

## Array -  `forEach`, `map`, `reduce`
[Take a look here for more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
```tsx
const cats = ["pickles", "oscar", "mittens", "meow meow"];
```

### `forEach`
To iterate on each value, we can use `forEach`
```tsx
cats.forEach((cat)=> console.log(cat + " says 'meow i want food' :("))
```
### `map`
To iterate on each value, and return the results (in an array), we can use `map`
```tsx
cats.map((cat)=> <>{cat} wants food >:0</>)
```
### `reduce`
To accumulate on each value, then return the accumulated result, we can use `reudce`
```tsx
cats.reduce((cat) => cat + " ")
```
### Other functional commands
There are other things like `find`, `filter`, and others, but you can just try it out as need be! Generally those definitions above are more often used.
## Using `map` in React
```tsx
{cats.map((cat)=> <div style={{backgroundColor: "blue"}}>{cat} wants food :0</div>)}
```
## Lists and Keys 
Doing the above causes
`Warning: Each child in a list should have a unique "key" prop.`

This means that every item, every `div` needs to have a key.
This is because react renders this list by checking out whats different right, and it uses key to help determine whether to render a completely new object, or just modify it. 
If you want to learn more about how React reconcilitates things, take a look (here)[https://reactjs.org/docs/reconciliation.html]
```
{cats.map((cat)=> <div key={cat}>{cat} wants food :0</div>)}
```
# React
## Functional React
### State 
`useState` is basically the same as setting state
Remember to break up state with `[name, setName]`
Use `setName` to setup the new state so that React knows to rerender!
```tsx
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
### Props
This is the original input passed into a function
- Imagine this as the things you put into a constructor
```tsx
function Cats(props) {
  return <div>{props.name}</div>;
}
function App() {
const cats = ["pickles", "oscar", "mittens", "meow meow"];

  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {
          cats.map((cat)=> <Cats name={cat}/>)
        }
        <button onClick={()=>setNumber(number+1)}/>
      </header>
    </div>
  );
}
```
### Props vs State
Imagine Props as the constructor variables in C++, and the state as the member vairables! **You cannot modify state directly, you have to use `setState` in order to set the state.** This is because React only knows to rerender (the parts of) your component based on when which states have changed from `setState`.

Let’s combine these topics so that every time you press a button, the number of cats you own increases!
Let’s bring the button and number logic into the Cats function
```tsx
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
  const cats = ["pickles", "oscar", "mittens", "meow meow"];

  return (
    <div className="App">
      <header className="App-header">
        {
          cats.map((cat) => <Cats name={cat}/>)
        }
      </header>
    </div>
  );
}
```
Now, let’s try to pass in the starting number!


Let’s add in the value from the map!
```tsx
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
  const cats = ["pickles", "oscar", "mittens", "meow meow"];

  return (
    <div className="App">
      <header className="App-header">
        {
          cats.map((cat) => <Cats name={cat} startingPoint={4}/>)
        }
      </header>
    </div>
  );
}
```
## Class Based
This is getting phased out. I’m just showing yalls for reference!
```tsx
class ComponentName extends React.Component {
  render() {
    return <div>HI I AM COMPONENT</div>;
  }
}
```

### State and Props
See here for more details: https://reactjs.org/docs/state-and-lifecycle.html
```tsx
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
## Why Functional
- Lightweight
- Easier to read
- Nice hooks (like the `useState` stuff)
- Performance boost
- Basically barely any pros for Class based, so I’d recommend defaulting to functional

# <a name="tryout"></a>Try this out yourself
## Shopping List Tryout!
Make an array of foods which you can either duplicate or delete from your list.
- Specify 3 different foods
- Add another food to your list
- Remove the food from your list

Challenge: add images corresponding to each food! Hint: objects have the `map` function as well!

### Learning Goals of the Tryout!
- State
- Props
- Git
- React keys
- `create-react-app`
- typescript/javascript
  - `map` function
- Basics of React Structure

# Resources
We *highly recommend* [React's own "Main Concepts" tutorial](https://reactjs.org/docs/hello-world.html).

React:

* [Components and Props (React)](https://reactjs.org/docs/components-and-props.html)
* [State and Lifecycle (React)](https://reactjs.org/docs/state-and-lifecycle.html)
* [Handling Events (React)](https://reactjs.org/docs/handling-events.html)
* [Lists and Keys (React)](https://reactjs.org/docs/lists-and-keys.html)
* [Reconcilitation (React)](https://reactjs.org/docs/reconciliation.html)
* [Forms (React)](https://reactjs.org/docs/forms.html)
* [Composition vs Inheritance (React)](https://reactjs.org/docs/composition-vs-inheritance.html)
* [Thinking in React (React)](https://reactjs.org/docs/thinking-in-react.html)
* [Higher-Order Components (React)](https://reactjs.org/docs/higher-order-components.html)
* [JSX in Depth (React)](https://reactjs.org/docs/jsx-in-depth.html)
* [Optimizing Performance (React)](https://reactjs.org/docs/optimizing-performance.html)
* [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

Typescript
* [Types vs Interfaces](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)

Javascript:

* [this (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [Strict mode (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Classes (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [class (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
* [Arrow function expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [When to use arrow functions](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)

