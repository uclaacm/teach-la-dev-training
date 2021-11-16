# Javascript And TypeScript

Today, we'll go into how we can use JavaScript and TypeScript to make our pages responsive, as well as a brief overview of JavaScript/TypeScript as a language!

We use JS/TS for TeachLA's projects like Learning Labs and the Editor with React, and today we'll break down how exactly they work.

Since we start with C++ here at UCLA, we'll cover how JS/TS are similar/different to C++ and talk about it from the context of a C-language!

## Table of Contents

- [JavaScript Vs TypeScript](#javascript-vs-typescript)
- [Hello World](#hello-world)
  - [Hello World In TypeScript](#hello-world-in-typescript)
- [Node.js](#nodejs)
  - [Package Managers: NPM Vs Yarn](#package-managers-npm-vs-yarn)
  - [NPM To Yarn](#npm-to-yarn)
  - [Using Node For TypeScript](#using-node-for-typescript)
- [Variables](#variables)
- [Primitive Types](#primitive-types)
  - [Variables in TypeScript](#variables-in-typescript)
- [Type Coercion](#type-coercion)
- [JavaScript Functions](#javascript-functions)
  - [TypeScript Functions](#typescript-functions)
  - [First-Class Functions](#firstclass-functions)
  - [Anonymous Functions](#anonymous-functions)
- [Objects Vs Primitives](#objects-vs-primitives)
  - [Arrays And References in JavaScript / TypeScript](#arrays-and-references-in-javascript-typescript)
  - [The Spread Operator](#the-spread-operator)
- [Objects](#objects)
  - [Objects in TypeScript](#objects-in-typescript)
- [For, If, While](#for-if-while)
- [Common Issues With JavaScript](#common-issues-with-javascript)
  - [Wrong Function Arguments](#wrong-function-arguments)
  - [Type Safety](#type-safety)
  - [Refactoring Struggles](#refactoring-struggles)
  - [Duck Typing in TypeScript](#duck-typing-in-typescript)
- [Manipulating the DOM](#manipulating-the-dom)
- [Conclusion](#conclusion)

## JavaScript Vs TypeScript

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a lightweight interpreted scripting/programming language that is heavily used in Web Applications and even beyond them!

However, TypeScript is a "superset" of JavaScript which means that it's built on top of JavaScript. **All valid JavaScript is valid TypeScript, but not all TypeScript is valid JavaScript.**

![tsVisual](https://github.com/uclaacm/teach-la-dev-training/blob/main/supplemental-react/01_ts_my_type_of_language/pictures/tsVisual.png)

Despite JavaScript being the most commonly used programming language in the world, developers have a love-hate relationship with it.

Looking at the StackOverflow [2021 Developer Survey](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-language-love-dread), TypeScript was the 3rd most loved programming language while JavaScript was the 15th most loved programming language.

To see why there's this divide, let's take a look at JavaScript first through the lens of C++, how to do the same thing in TypeScript, and see how TypeScript solves some of JavaScript's biggest problems!

## Hello World

As we said, JavaScript is heavily used within Web Applications. In fact, we can even insert JavaScript into our HTML files with the `script` tag!

```html
<div>Some Code...</div>
<script>
  console.log("Hello World!");
</script>
```

The script tag executes javascript code in the browser, but it can get really messy to have one giant file with both HTML and JS. Similarly to how we can make a CSS stylesheet and link it within our HTML file, we can put our separate JavaScript code within a separate JavaScript file with the `.js` extension.

We can link back to it in our code with the `src` property of our script tag!

```js
//tests.js
console.log("Hello World!");
```

The console is an object in javascript, and we log something to it with the `.log()` method!

```html
<div>Some Code within index.html...</div>
<script src="tests.js"></script>
```

If you refresh the page, it looks like nothing got added to our page! However, if we go into the console section of our page with `Inspect Element`, we can see that it says Hello World to us!

This makes our browser execute JavaScript code, but there are actually other ways to execute JS code without your browser.

## Node.js

Node is a JavaScript runtime which is a way to execute your javascript code files without using your browser, and you can run a file by simply calling

```sh
$ node FILE_NAME.js
```

### Package Managers: NPM Vs Yarn

With Node comes a package manager to install dependencies and external libraries for your code. Node comes with one built in, NPM, (node package manager), but within TeachLA we use Yarn instead! This is because yarn is a lot faster and there used to be security issues within NPM.

### NPM To Yarn

Switching from NPM to Yarn isn't that bad, you can install yarn globally through npm with

```sh
$ npm install --global yarn
```

and there's only a few differences between the two, like how `npm start` becomes `yarn start` or how `npm install PACKAGE` becomes `yarn add PACKAGE`, etc.

To initialize yarn in your application, just run

```
$ yarn init
```

or

```
$ yarn init --yes
```

to skip all the prompts that appear!

## Using Node For TypeScript

Similarly to how we can use node to run scripts, we can also use node to get typescript set-up on our machines as well!

Since TypeScript is built on-top of JavaScript, we're going to need to add it in our project's dependencies with:

```sh
$ yarn add typescript
```

This adds TypeScript support to our project and gives as access to the TypeScript compiler in our shell with `tsc` which we will use to run typescript commands like compiling our code and more!

To initialize TypeScript in our application, we have to run:

```sh
$ yarn tsc --init
```

This creates a `tsconfig.json` file in the root of our current directory and allows us to customize what we want TypeScript to allow or do.

When we compile/transpile our TypeScript code with:

```sh
$ yarn tsc path/to/file.ts
```

it checks for errors and gets transformed into JavaScript to the location of our `outDir` within our tsconfig.json .

The great thing about it is that it checks for type errors **before** we have to run the code and provides more thorough error messages which is amazing!

Now, let's go over how things work in both JavaScript and TypeScript, then later we'll cover how TypeScript helps solve a lot of common issues with JavaScript!

### Hello World in TypeScript

With TypeScript, **you cannot** embed it directly into your HTML code since you can only insert JS into HTML code, but you can create a separate `.ts` file for your typescript code!

```ts
console.log("Hello world!");
```

Then, compile it with tsc...

```ts
yarn tsc
```

and run the compiled js file!

```sh
$ node build/tests.js
```

## Variables

To make variables in JavaScript, you simply call your variables with the `let` keyword.

```sh
let message = "Hello World!";
console.log(message);
```

Unlike other statically typed languages like C++, Java, JavaScript is **dynamically typed** which means that the types of variables, return values of functions, etc are all evaluated **at runtime**. In **statically typed languages**, you have to declare the type of the variable when you make it. But in JavaScript, you just have to say `let`, and the browser figures out what type it is.

Even though types are determined at run-time, JavaScript still has types to it! In JavaScript, everything is either a primitive data type or an object, let's go over each of them!

## Primitive Types

In JavaScript, there are 7 different "primitive" data types. By primitive data type, it means that in memory they are represented with their actual value in memory, and their values are immutable, which means that that the value of a primitive cannot be altered, but the variable associated with it can be reassigned a new value!

The six primitive data types are

- string
- number
- bigInt (big integer values)
- boolean (true or false)
- null
- undefined

(and Symbol, but it's not very common and we won't cover it!)

Numbers in JavaScript are an example of a primitive type. You can check the type of something with `typeof`.

```js
console.log(typeof 4);
// number
```

Let's see an example of how primitive data is stored in memory:

```js
let myNum = 56;
const numRef = myNum;

// SEPARATION BETWEEN CHARTS

myNum = 50;
console.log(myNum == numRef);
//prints out false!
```

| Variable | Value |
| -------- | ----- |
| myNum    | 56    |
| numRef   | 56    |

We can assign new values with the assignment operator `=`. The assignment operator takes the value that's within the right side and assigns it to the variable on the left side.

After we change myNum's value to 50, it becomes

| Variable | Value |
| -------- | ----- |
| myNum    | 50    |
| numRef   | 56    |

### Variables in TypeScript

Variables in TypeScript work a bit differently. In JS, while we just had to use the let keyword to make a variable, TypeScript forces us to give a type to **everything**.

The above example in TypeScript can be written like so:

```ts
let myNum: number = 56;
const numRef: number = myNum;
myNum = 50;
```

## Type Coercion

Did you see how we compared two values with the `==` symbol? In JavaScript, there are actually two ways to compare values.

The first way, `==` tries to cast things to be the same type before comparing them.

```js
console.log(1 == "1");
//returns true!
```

However, for `===` to return true, the two things you compare need to be of the same type!

```js
console.log(1 === "1");
//returns false!

console.log(1 === 1);
//returns true!
```

`-` only works with `Numbers` on both sides, and will convert to Number first.
**However**, + will convert to string if the types aren't the same!

```js
console.log("10" - 1);
//9

console.log("10" + 1);
//101
```

If you try subtracting things that aren't numbers, you get **NaN** which means Not a Number.

Type coercion is also really helpful with booleans!

Values that are evaluated as false are the following:

- `0`
- `null`
- `undefined`
- `""` (empty string)
- `NaN`

while all other values are coerced to true.

This is really helpful because in our code, we can make something like

```js
let str = "";

if (str) {
  //execute code
}
```

to clean up and avoid having to explicitly check equality or inequality with `==` or `===`.

## JavaScript Functions

Javascript is a **functional programming language**. By the sound of that, functions are probably pretty important. They look pretty C-like to us:

```js
function saySomething(message) {
  console.log(message);
}

saySomething("hey there!");
// "hey there!"

function squared(n) {
  return n ^ 2;
}

squared(2);
// 4
```

You start by writing the keyword `function`, then the name of the function, and inside the parentheses, each parameter. Finally, you've got the body, and either an explicit `return` statement, or an implicit empty return (`return;`).

Note that there are no explicit types here! This can actually make things quite confusing.

```js
function adder(a, b) {
  return a + b;
}

adder(42, 42);
// 84
adder(42, "42");
// "4242"
```

Type coercion is back again! In this case, you'd probably want to use explicit type conversions.

```js
function numberAdder(a, b) {
  return Number(a) + Number(b);
}
```

This type of typecasting is essentially calling the `Number` constructor with our parameters. While this looks pretty annoying, you often have to write code like this when interfacing with other libraries, as guaranteeing types is tricky!

### TypeScript Functions

Within TypeScript, functions look just a bit different!
With TypeScript, you have to type the return value of your function and its parameters. Let's take a look at the TypeScript version of our adder function:

```ts
function adder(a: number, b: number): number {
  return a + b;
}
```

If we tried calling adder in the future with two non numbers, typescript won't compile and will tell us that we are calling the function incorrectly! This is really helpful for when we're writing complex code, and being able to know right away that you are doing something incorrectly without even having to run code helps speed up development process a lot!

### First-Class Functions

Let's move on to the cool stuff though. One of the big features of functional programming languages is the idea of _first-class functions_: functions are treated like any other data type. In this case, that means that... functions are objects too!

```js
function saySomething(message) {
  console.log(message);
}

let greeter = saySomething;
greeter("hey!");
// "hey!"

console.log(greeter);
// f: greeter(message) ...
```

Wow! That's not something you'll see often. The lack of type annotations makes this a little tricky to understand, but we're basically pointing `greeter` to the "function body" of `saySomething`! Every time you use the name of the function _without parentheses or its parameters_, it's the reference to the function - just like any other variable!

One useful application of this is a _higher-order function_, or passing in functions as arguments for other functions.

```js
function friendlyGreeting(name) {
  return "Hey there! Great to meet you, " + name;
}

function greetEverybody(listOfPeople, greetingFunction) {
  for (let person of listOfPeople) {
    console.log(greetingFunction(person));
  }
}

let flirters = ["🥺", "😘", "😍"];

greetEverybody(flirters, friendlyGreeting);
// "Hey there! Great to meet you, 🥺"
// "Hey there! Great to meet you, 😘"
// "Hey there! Great to meet you, 😍"
```

That's a trivial example, but it demonstrates the point. One more realistic example of this is the `.map` function on arrays:

```js
function double(x) {
  return 2 * x;
}
let nums = [1, 2, 3, 5, 7, 11];
nums.map(double);
// 2, 4, 6, 10, 14, 22
```

This is a huge part of functional programming (something about no side effects, parallelization, etc. - out of scope of this discussion, but hit up Matt for more)! You'll find this often in React apps when you need to generate lists of components from data.

### Anonymous Functions

There's one other thing we'll quickly point out: anonymous (or lambda, or whatever you want to call them) functions.

Let's say we wanted to double all elements of the `nums` array again, but we only need to _really_ do this operation once. It wouldn't make sense to write a whole function, so we'd like for a slightly more disposable medium.

Luckily, JavaScript provides for this in the form of **anonymous functions**, otherwise known as **lambda expressions** in languages like C++ and Python. It is easier to take a peek at one in action:

```py
# in python, lambda functions are very common.
# you've likely seen or used one in a call to `filter`:
nums = [1, 2, 3, 5, 7, 11]
filter(lambda item: item == 5, nums)
# [5]
```

We have an indication that we are providing a lambda expression (`lambda` in Python), the name(s) of the argument(s) it will take (`item` after the `lambda`), and the expression itself (after the `:`). In this case, we wrote a lambda expression that will return true if `item` is equal to 5. Using this expression in a call to `filter` (which takes a function argument), we filter out all the items except for 5!

With that under our belt, let's take a look at what one looks like in JavaScript:

```js
let nums = [1, 2, 3, 5, 7, 11];
nums.map(function (element) {
  return element * 2;
});
// [2, 4, 6, 10, 14, 22]
```

Let's break down the syntax a little. Just like Python, we have:

- Indication of the start of a `function` with the keyword
- The parameter list or arguments to the function (the part in `()`)
- The body of the function (in our case, the part in `{}`)

Thus, each element in `nums` has our anonymous function called on it, and the element is set to its return value.

There are slightly cleaner ways of creating lambdas in JavaScript, but this form will never fail you. Just make sure that your lambda expression takes the parameters its caller expects, and the return value is expected as well!

Alright, now that we've covered both JavaScript and TypeScript, let's see in more detail how TypeScript helps solve common issues with JavaScript!

## Objects Vs Primitives

Now that we've covered primitive types, the other data type that JavaScript uses for non-primitive types are **objects.** Everything else that's not a primitive is an object!

The main difference between primitives and objects is how they are stored in memory. While the values of primitives are directly represented, objects actually store references to addresses. These addresses are what store the data!

An example of an object is an array, let's see how an array is stored in memory:

### Arrays And References in JavaScript / TypeScript

```js
const arr = [1, 2, 3];
const arrRef = arr;
//why can we change arr's 2nd index even though it's const??
arr[2] = 4;
//arr and arrRef are both [1,2,4] now!

console.log(arr == arrRef);
//prints out true!
```

Within TypeScript, if you want to make an array of numbers, you just have to add in the `[]` at the end of the type declaration.

```ts
const arr: number[] = [1, 2, 3];
const arrRef = arr;
//why can we change arr's 2nd index even though it's const??
arr[2] = 4;
//arr and arrRef are both [1,2,4] now!

console.log(arr == arrRef);
//prints out true!
```

If you want to make an array of multiple types, you can use a union with `|` to declare that you want it to be multiple types!

```ts
const mixedArr: (number | string)[] = ["Hello", 2.5, "Wow!"];
```

Previously, we've discussed how you can declare variables with the `let` keyword. Well, the `const` keyword is similar to let, and it makes it so that you can't change the value that is assigned to the variable.

Alright, now let's take a look at how references work! First, let's take a look at the **const** keyword. The reason why we can change the value of arr[2] even though it's declared const is because the const keyword defines a constant **reference** to a value for objects.

Now, references are different than the primitive data types that we just discussed. While primitive data types store the value directly with respect to their variables, references work differently.

Referential equality is used for nested data types. (Nested data types are objects with {}, arrays with [], or anything that's not the five primitive types we covered above). Let's take a look to see how references are stored in memory!

| Variable | Value  | Address | Object  |
| -------- | ------ | ------- | ------- |
| arr      | <#001> | #001    | [1,2,3] |
| arrRef   | <#001> |         |         |

When we change arr[2] to 4...

| Variable | Value  | Address | Object  |
| -------- | ------ | ------- | ------- |
| arr      | <#001> | #001    | [1,2,4] |
| arrRef   | <#001> |         |         |

Just like with primitive types, `===` compares the value associated with each variable. However, here we can see that the value actually corresponds to a corresponding address in memory where the Object is stored!

If we want to create a new object in memory that's based off of the previous one, we have to use the **spread** operator.

### The Spread Operator

With the spread operator, we can create "deeper" copies of objects as opposed to "shallow" copies. Deep copies are not connected to the original data, while shallow copies are "connected" to the data by having the same reference pointer!

Let's try doing the same thing as above except with the spread operator this time!

```js
const arr = [1, 2, 3];
//Spread operator!
const arrRef = [...arr];
arr[2] = 4;
console.log(arr);
//prints out [1,2,4]
console.log(arrRef);
//prints out [1,2,3]
```

The spread operator passes in the values within the object, but creates a new reference to a **new object** in memory!

| Variable | Value  | Address | Object  |
| -------- | ------ | ------- | ------- |
| arr      | <#001> | #001    | [1,2,3] |
| arrRef   | <#002> | #002    | [1,2,3] |

After changing arr[2]'s value...

| Variable | Value  | Address | Object  |
| -------- | ------ | ------- | ------- |
| arr      | <#001> | #001    | [1,2,4] |
| arrRef   | <#002> | #002    | [1,2,3] |

**NOTE:** The spread operator is not a fully "deep" copy, but it's one step deeper than a shallow copy. This means that it copies over all the values of the copied over array. If you have an array of arrays for instance, you would have to nest your spread operators to create a fully deep copy like so...

```js
//arrays of numbers
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

//array of the array of numbers
const arrArr = [arr1, arr2, arr3];

//mapping to create a deep copy by nesting our spread operator inside of a mapping function
const fullyDeep = numArr.map((subArray) => [...subArray]);

const stillShallow = [...numArr];

arr1[2] = 10;

/*stillShallow is changed as well since its values point to the same arrays as 
numArr even with the spread operator! */

//However, fullyDeep is correctly a deep copy!
```

Representation in Memory with stillShallow and fullyDeep:

| Variable     | Value  | Address | Object                 |
| ------------ | ------ | ------- | ---------------------- |
| arr1         | <#001> | #001    | [1,2,3]                |
| arr2         | <#002> | #002    | [4,5,6]                |
| arr3         | <#003> | #003    | [7,8,9]                |
| arrArr       | <#004> | #004    | [<#001>,<#002>,<#003>] |
| stillShallow | <#005> | #005    | [<#001>,<#002>,<#003>] |
| fullyDeep    | <#006> | #006    | [<#006>,<#007>,<#008>] |
| fullyDeep[0] | <#007> | #007    | [1,2,3]                |
| fullyDeep[1] | <#008> | #008    | [4,5,6]                |
| fullyDeep[2] | <#009> | #009    | [7,8,9]                |

So, in order to make fully deep copies, you have to know the **structure** of the object you are copying and make sure that you use the spread operator when necessary to prevent shallow copy shenanigans.

Key takeaways of arrays:

- Arrays in JS can have multiple types in them
- They can be used as stacks/queues.
- Arrays are Objects

## Objects

That's right, this array was an object. Under the hood, when we called let arr, we "called the constructor for an array" (not... entirely true). Then, when we do things like .length or .push(), we're accessing variables or using class functions respectively!

This is the case for every data type in Javascript, including the primitive ones we discussed earlier! They all stem from one "class" (not entirely true) called Object, which has a wide variety of predefined properties and methods.

In JavaScript, `Objects` are kind of like dicts in Python, with **key-value pairs** holding all the data. Let's see the syntax here!

```js
const myPet = {
  name: "Rufus",
  type: "dog",
};

console.log(myPet["name"]);
//Rufus

myPet["name"] = "Rufus the Fourth";
myPet.type = "cat";
```

As you can see, you can declare the "shape" of the object with the key on the left, and you can specify its value on the right!
And to access values within your object, you simply can call the key of it.

### Objects in TypeScript

For objects in typescript, you can type the parameter of it with either the type or interface keyword! It's also nice because when you call an object that is of a specific type, the `.` operator gives you **all the properties of the object**, and makes development easier!

```ts
type Pet = {
  name: string;
  type: string;
};

interface PetInterface {
  name: string;
  type: string;
}
const myPet: Pet = {
  name: "Rufus",
  type: "dog",
};

console.log(myPet["name"]);
//Rufus

myPet["name"] = "Rufus the Fourth";
myPet.type = "cat";
```

## For, If, While

Just like in other languages, we can make loops and do conditionals! I won't bore you with the syntax, but here's some quick examples:

```js
const answer = 9 + 10 === 21;

if (answer) {
  console.log("9+10=21");
} else {
  console.log("That's wrong!");
}

let hungry = true;
while (hungry) {
  goToBplate();
}

const nums = ["1", "2", "3"];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// 1 2 3

for (let num of nums) {
  console.log(num);
}
// 1 2 3

const skillLevels = {
  coding: 4,
  running: 3,
  singing: 1,
};

for (skill in skillLevels) {
  console.log(skillLevels[skill]);
}
```

In the last two examples, we see how we can use `of` and `in` to go through objects! The `of` keyword can be used for things that are "iterable" (a set order to them like an array). And the `in` keyword can be used to go through "enumerable" things, where you can name all of the properties of it without ordering them, like an object.

## Common Issues With JavaScript

Since JavaScript is a dynamically typed language (which means that variables can change types), JavaScript fails to catch a lot of errors and makes refactoring code in the future hard.

### Wrong Function Arguments

Let's take a look at this function that divides two numbers!

```js
function divideTwoNums(a, b) {
  return a / b;
}
```

If we try running our code with two arguments that are both numbers, then the function works perfectly fine.

```js
console.log(divideTwoNums(8, 4));
//returns 2
```

However, if we try to pass in two arguments that are **_not_** numbers into `divideTwoNums`, we can see that some issues arise!

```js
console.log(divideTwoNums("apple", "banana"));
//returns NaN
```

**Should we be able to pass in "apple" and "banana" into our function `divideTwoNums`?**

### Type Safety

If we were to type this in TypeScript, it would be like this:

```ts
function divideTwoNums(a: number, b: number): number {
  return a / b;
}
```

This means that the function's parameters, a and b are both numbers, and
the function `divideTwoNums` also returns a number!

When we compile with

```sh
$ yarn tsc tsTests.ts
```

it compiles to regular old JavaScript!

```js
function divideTwoNums(a, b) {
  return a / b;
}
```

This provides **type-safety** since we get compilation errors if we try calling `divideTwoNums` and a and b are not numbers!

```ts
/*Argument of type 'string' is not assignable to parameter of type 'number'*/
console.log(divideTwoNums("tree", "chocolate"));
```

### Refactoring Struggles

Let's take a look at a function that calls a pet argument we pass in!

```js
function callPet(pet) {
  return "Come here " + pet + "!";
}
```

We can call it like so:

```js
const myPet = "Rufus";
console.log(callPet(myPet));
//Prints out "Come here Rufus!"
```

However, let's say that we want to change the structure of our pet parameter for the function `callPet` to be a pet object like so:

```js
const newPet = {
  name: {
    first: "Rufus",
    last: "the Third",
  },
  type: "dog",
};
```

Even though our code editor won't spit any errors at us when we try running `callPet(newPet)`, the application **will** crash, but the error will point us towards the function instead of where the problem **really lies**, inside the function call.

```js
/*Our terminal tells us: TypeError: Cannot read property 'first' of undefined at callPet, even though our code editor thinks this is perfectly fine!  */
console.log(callPet(newPet));
```

This can be a **serious problem** since application crashes can be very costly for companies and we want to be able to detect our errors at the source!

### Duck Typing in TypeScript

More than just simple typing of functions with primitives, TypeScript offers us a way to describe the **shape** of parameters and return values by providing an abstraction of the parameters we pass in!

Let's take a look at our `callPet` function in JavaScript again,

```js
function callPet(pet) {
  return "Come here " + pet.name.first + "!";
}
```

If we were to turn this into TypeScript, how do we know what is the type of the pet parameter?

TypeScript is a **duck-typed** language, which means that if it looks like a duck, acts like a duck, then it is a duck!

Duck-Typing is how **interfaces** are formed for TypeScript, and we can form them by looking at how we would want our parameters passed in as. Let's take a look at the pet object that we pass in.

```js
const newPet = {
  name: {
    first: "Rufus",
    last: "the Third",
  },
  type: "dog",
};
```

As we can see, the pet has a name object with a first and last field, as well as a type. To convert this to an interface, we essentially describe this `newPet` object in terms of its types!

```ts
interface Pet {
  name: {
    first: string;
    last: string;
  };
  type: string;
}
```

Now that we've declared that Pet objects have a name object with first and last fields of strings, as well as a type of string, we can pass in the interface as the type of `callPet`'s parameters!

```ts
function callPet(pet: Pet): string {
  return "Come here " + pet.name.first + "!";
}
```

We can also type our objects through our interfaces like so:

```ts
const newPet: Pet = {
  name: {
    first: "Rufus",
    last: "the Third",
  },
  type: "dog",
};
```

## Manipulating the DOM

Okay, but how does this help us make websites? Well, the original focus was to change the "Document Object Model", which as you may recall, is a fancy word for our webpage. Let's run through a bare-bones example:

```html
<button id="button">click me!</button>
<p>you've clicked the button <span id="clicks">0</span> times</p>
```

```js
document.getElementById("button").addEventListener("click", function () {
  let clickElement = document.getElementById("clicks");
  let currentClicks = Number(clickElement.innerHTML);
  clickElement.innerHTML = currentClicks + 1;
});
```

Let's open this up in our web browser and take a peek at what's going on.

Let's focus in a little bit on this: `document.getElementById(...) ...`. If you're looking for a direct example of the DOM in JS, here it is: the literal `document` object! This is the native JavaScript representation of the current webpage.

Next, we call `getElementById()` on it, with argument `"button"`. This should be pretty self explanatory as to what it does, but let's take a look at what it actually looks like in our console:

This is the crux of the DOM. Every tag in our document is representable as an object in native JavaScript (notice the properties `classList` or `attributes`?). We call each of these tags a **node** on our page. Why a node?

Going back to the tree structure of HTML documents we discussed in lesson 1, we can see where this is useful in JavaScript. Every tag is a **node** on our webpage, with a parent node and children nodes - notice the inclusion of the `children` field.

Each node also has a variety of member functions that can be called. In our example, we call `addEventListener`.

### `addEventListener`

This is an absolutely essential function to working with the DOM. If we want a particular function to be called each time an event occurs on the webpage with respect to a certain portion of said document, we can do so with this function.

To put the function in more definite types, its signature is a little something like: `addEventListener(string eventName, function callBack)`.

That is, we specify the event to listen for (in our case `"click"`), and the function to call when said event happens.

With that out of the way, let's talk about our callback function:

```js
function(){
    let clickElement = document.getElementById("clicks");
    let currentClicks = Number(clickElement.innerHTML);
    clickElement.innerHTML = currentClicks + 1;
})
```

We declare a variable to be the element on our page with ID "clicks", cast the contents of its HTML (the `.innerHTML` field) to a `Number`, then set its `.innerHTML` field to said number + 1. That is, it increments the numerical value of the innerHTML of `clicks`.

## Conclusion

Overall, we discussed the basics of JavaScript and TypeScript today, as well as how TypeScript can help solve some of the common problems of JavaScript and why it's so loved!
