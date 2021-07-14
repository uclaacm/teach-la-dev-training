# Reducing State Management Problems

With functional React components, we can handle state management with the `useState` hook.

```tsx
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
}
```

However, today we will discuss how state management is a bit more involved for nested data types like objects, arrays, etc, and how new features of JavaScript/React like the [**spread operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and the `useReducer` hook help simplify things!

## Table Of Contents

- [How React State Management Determines Rerenders](#how-react-state-management-determines-rerenders)
- [Equality in JavaScript](#equality-in-javascript)
  - [Primitive Types](#primitive-types)
  - [References in JavaScript](#references-in-javascript)
  - [The Spread Operator](#the-spread-operator)
- [Nested State with the useState Hook](#nested-state-with-the-usestate-hook)
- [The useReducer Hook](#the-usereducer-hook)
- [How does useReducer Work](#how-does-usereducer-work)
  - [Reducer Setup Outside Your Component](#reducer-setup-outside-your-component)
  - [Reducer Setup Inside Your Component](#reducer-setup-inside-your-component)
  - [Using Our Reducer Inside Our Component](#using-our-reducer-inside-our-component)
- [Conclusion](#conclusion)

## How React State Management Determines Rerenders

With React's state management tools like the **useState** or **useReducer** hook, the developers of React have added a level of optimization! Unlike the old `this.setState` of React class-based components, these hooks [don't trigger a re-render](https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019) if the previous state's value was equal to the new state's value, using an [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison.

## Equality in JavaScript

Now, how does the `Object.is` comparison work? First, we have to discuss the different data-types in JavaScript. Let's take a look at a small example!

### Primitive Types

```tsx
let myNum: numbers = 56;
const numRef: number = myNum;
myNum = 50;
console.log(Object.is(myNum, numRef));
//prints out false!
```

Numbers in JavaScript are an example of a primitive type. (The 5 primitive types are boolean, null,undefined, string, and number.) For primitive types, the value of the variable itself is what gets passed down into memory. Let's see how myNum and numRef are represented in memory!

| Variable | Value |
| -------- | ----- |
| myNum    | 56    |
| numRef   | 56    |

After we change myNum's value to 50, it becomes

| Variable | Value |
| -------- | ----- |
| myNum    | 50    |
| numRef   | 56    |

The Object.is() comparison looks at the values of myNum and numRef and determines if they are equal!

### References in JavaScript

```tsx
const arr: number[] = [1, 2, 3];
const arrRef = arr;
//why can we change arr's 2nd index even though it's const??
arr[2] = 4;
//arr and arrRef are both [1,2,4] now!

console.log(Object.is(arr, arrRef));
//prints out true!
```

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

Just like with primitive types, Object.is compares the value associated with each variable. However, here we can see that the value actually corresponds to a corresponding address in memory where the Object is stored!

If we want to create a new object in memory that's based off of the previous one, we have to use the **spread** operator.

### The Spread Operator

With the spread operator, we can create "deeper" copies of objects as opposed to "shallow" copies. Deep copies are not connected to the original data, while shallow copies are "connected" to the data by having the same reference pointer! (Which is why you get some non-update shenanigans sometimes, React uses Object.is to check for equality!)

Let's try doing the same thing as above except with the spread operator this time!

```tsx
const arr: number[] = [1, 2, 3];
//Spread operator!
const arrRef = [...arr];
arr[2] = 4;
//arr and arrRef are both [1,2,4] now!

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

```tsx
//arrays of numbers
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

//array of the array of numbers
const numArr = [arr1, arr2, arr3];

//mapping to create a deep copy by nesting our spread operator inside of a mapping function
const newArr = numArr.map((subArray) => [...subArray]);

const shallowCopy = [...numArr];

arr1[2] = 10;

/*shallow copy is changed as well since its values point to the same arrays as 
numArr even with the spread operator! */

//However, newArr is correctly a deep copy!
```

## Nested State with the useState Hook

Now, why is this important for React applications? Within React Applications, `useState` works well for primitive data types like booleans, numbers, etc. However, what if we had a complex object that we wanted to store in state that has multiple parts to it, like a user?

```tsx
//Let's keep track of a user object! It has a name, a number for likes, and a string for a status

function TrackUser() {
  interface UserObject {
    name: string;
    likes: number;
    status?: string;
  }
  const defaultUser: UserObject = {
    name: "Anonymous User",
    likes: 0,
  };
  const [user, setUser] = useState(defaultUser);
}
```

If we want to only modify one part of our userObject stored in state, we will have to use the spread operator to keep the rest of the object the same. The spread operator also helps React know that we are creating a **new instance of state** and that we want the website to rerender!

Let's look at an example where we use a setState callback function passing in the previous state

```tsx

function TrackUser(){

  //same as above...

  //spread operator to only change the name portion!
  function changeName(newName : string){
    setUser(prevUser => {...prevUser, name: newName});
  }

  //spread operator to change only the number of likes!
  function incrementLikes(){
    setUser(prevUser => {...prevUser, likes: prevUser.likes +1});
  }

}
```

## The useReducer Hook

The useReducer hook is a React hook that is similar to reducers in Redux, (a 3rd party previous state management tool) that helps to handle complex "nested" state like the user object above and complex things that you want to store inside of state!

In fact, useReducer is the recommended state management tool over useState when state depends on the previous state, when your state is more complex, and for unit tests!

## How Does useReducer Work?

Reducers are a bit more complex than the other two hooks we've looked at so far, since they have both set-up inside/outside of your React component. To see just how useful useReducer can be, let's take a look at this example we want to do!

![useReducer](https://github.com/uclaacm/teach-la-dev-training/blob/main/archive/s21/advanced_react_track/03_nested_state_of_mind/pictures/reducerExample.png)

We're going to store a histogram of data, increment specific fields, randomly increment fields, and reset all the numbers back down to zero!

### Reducer Setup Outside Your Component

To use a reducer function, we set-up an initial state and a reducer function **outside** our React component.

In fact, useReducer allows for easier unit testing since the reducer function itself doesn't use React at all and is a **pure function** which doesn't depend on other aspects of state like `useEffect`, `useState`, `useContext`, etc.

Let's say for instance that we want to initialize each part of the histogram to have a multiple of 5.

We can initialize it like so:

```tsx
const nums = [1, 2, 3, 4, 5];
interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

type Histogram = HistogramSection[];

const initialHistogram: Histogram = nums.map((num) => ({
  x: "Object " + num,
  y: 20 - 5 * (num - 1),
  weight: 0.2,
}));
```

We also have to set-up a reducer function which gets passed in two things:

- Our complex state object which will act like the prevState
- an action to take, which can be passed in as an object and have subparts

Our reducer function handles **all the state logic** inside one centralized place, and is preferable to literring `setState` update functions over your code if you want centralized logic.

Within our action object, we can pass in something like an `action.type` which we will use to differentiate between what action we want to take and how we want to change the state.

Inside of your case statement, you return a modified version of the previous state through **immutable update logic.**

With the use of the spread operator, we can say that we want to keep the rest of the object the same **EXCEPT** for the parts that we want to change! This doesn't modify the original state passed in, but instead creates a **new object based off of the original state.**

Let's see the first parts of our reducer function!

```tsx
//pass in your current complex state object and what action you want to take
type Histogram = HistogramSection[];

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

enum HistogramActionType {
  INCREMENT_ALL,
  INCREMENT_ONE,
  RESET,
}

interface HistogramAction {
  type: HistogramActionType;
  sectionName?: string;
}

const histogramReducer = (
  prevHistogram: Histogram,
  action: HistogramAction
): Histogram => {
  switch (action.type) {
    case HistogramActionType.INCREMENT_ALL: {
      /* return a NEW ARRAY that is based off of the previous state,
      DON'T modify the previous one!
      */
      //increment just one section
      const newHistogram: Histogram = prevHistogram.map((section) => ({
        ...section,
        y: section.y + 1,
      }));
      //sort the array
      newHistogram.sort((a, b) => b.y - a.y);
      return newHistogram;
    }

    //some more stuff...
  }
};
```

This was an example where we incremented **each** section of the histogram. If we want to be more specific and only do things for specific sections, we can pass in more parameters inside of our `HistogramAction` object as a **payload**.

For instance, if we wanted to only increment one specific part of the histogram array...

```tsx
//within our reducer function...
switch (action.type) {
  //within our switch statement...
  //only increment one section of our histogram
  case HistogramActionType.INCREMENT_ONE: {
    //specifying which one to increment through our action.sectionName
    const newHistogram = prevHistogram.map((section) => {
      if (section.x === action.sectionName) {
        return { ...section, y: section.y + 1 };
      } else return section;
    });
    newHistogram.sort((a, b) => b.y - a.y);
    return newHistogram;
  }
}
```

And that's our reducer function set-up! Here's how it looks in the end:

```tsx
//pass in your current complex state object and what action you want to take
type Histogram = HistogramSection[];

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

enum HistogramActionType {
  INCREMENT_ALL,
  INCREMENT_ONE,
  RESET,
}

interface HistogramAction {
  type: HistogramActionType;
  sectionName?: string;
}
const histogramReducer = (
  prevHistogram: Histogram,
  action: HistogramAction
): Histogram => {
  switch (action.type) {
    case HistogramActionType.INCREMENT_ALL: {
      /* return a NEW ARRAY that is based off of the previous state,
      DON'T modify the previous one!
      */
      //increment just one section
      const newHistogram: Histogram = prevHistogram.map((section) => ({
        ...section,
        y: section.y + 1,
      }));
      newHistogram.sort((a, b) => b.y - a.y);
      return newHistogram;
    }

    case HistogramActionType.INCREMENT_ONE: {
      //specifying which one to increment through our action.sectionName
      const newHistogram = prevHistogram.map((section) => {
        if (section.x === action.sectionName) {
          return { ...section, y: section.y + 1 };
        } else return section;
      });
      newHistogram.sort((a, b) => b.y - a.y);
      return newHistogram;
    }

    case HistogramActionType.RESET: {
      //reset everything to zero
      const zeroHistogram: Histogram = prevHistogram.map((section) => ({
        ...section,
        y: 0,
      }));
      //sort the histogram alphabetically
      zeroHistogram.sort((a, b) => (a.x > b.x ? 1 : -1));
      return zeroHistogram;
    }

    default: {
      return prevHistogram;
    }
  }
};
```

### Reducer Setup Inside Your Component

The setup for using a reducer inside your component is similar to useState, by putting in a "getter" for your reduced state and a function called a "dispatch" that modifies your reduced state.

```tsx
import React, { useReducer } from "react";
function Histogram() {
  const [dataHistogram, dispatchDataHistogram] = useReducer(
    histogramReducer,
    initialHistogram
  );
}
```

### Using Our Reducer Inside Our Component

Using our dispatcher, we can pass in our "action object" to handle changes to our nested state object.

```tsx
function addToY(name: string) {
  dispatchDataHistogram({
    type: HistogramActionType.INCREMENT_ONE,
    sectionName: name,
  });
}
```

## Conclusion

As we scale up to building larger and larger web applications, we'll find that we can't simply store all our state logic in primitive values. Database fetching, API calls, and more add another layer of complexity to how we want to store data in such a way that favors centralized state management through `useReducer` and `useContext`.

From this [great guide](https://blog.logrocket.com/guide-to-react-usereducer-hook/) available online, there are a couple good rules of thumb to decide if you should switch your useState logic to a reducer.

- If you want a centralized location to manage state (in our example, we used the reducer to handle everything with our chart data in the same function! (Incrementing, sorting, resetting)
- If changes in state depend on each other (we wanted to sort our data after incrementing values, and useReducer gave us this performance guarantee!)
- If you have data that is hard to represent as primitive data types (we had to store an array of objects, which add too many layers of complexity to useState

In conclusion, the usage of reducers help us handle complex state when things can get unruly and help to reinforce our functional programming paradigm of having **immutable variables** and data transformation!
