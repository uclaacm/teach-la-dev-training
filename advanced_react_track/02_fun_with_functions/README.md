# Fun With Functions

Back in 2009, JavaScript released [EcmaScript 5](https://dev.to/skaytech/history-of-ecma-es5-es6-beyond-lpe), the introduction of object and array operations introduced ways to allow **declarative** programming styles as opposed to an **imperative** one.

# What Are Programming Paradigms?

![](./pictures/programmingParadigms)

Programming paradigms are a way of thinking, and the way that you think about making your code!

# JavaScript As A Functional Programming Language

In functional programming languages, you break up tasks into smaller subtasks and composing functions on-top of each other.
Instead of **changing** existing values, you create **new ones** based off of input!

This is the concept of **immutable data** and why the `const` keyword is used a lot! Once you have created a variable, you don't change its value. Rather, you use its value by passing it into functions and creating **new** data.

_For those familiar with redux, this is where the concept of **immutable update logic** comes from!_

More than just being a functional programming language, JavaScript also supports a **declarative programming style** over an **imperative** one.

## Imperative Programming

Let's take a look at a function that does things imperatively!

## Example: Adding Together Data In An Array

**How Would We Do This Imperatively?**

![](./pictures/imperativeAddition)

As we can see here, **imperative** programming styles explains **HOW** your code works and the step by step process of how you can achieve your desired result.

**INSERT TABLE HERE**

## Features of Imperative Programming

- Procedural (Giving compiler Step by Step orders of what to do)
- Easy to learn
- Large amounts of code

## Declarative Programming

**How would we do this declaratively?**

We abstract the logic of how it works behind a function, and show logic on **WHAT** output we want the code to produce!

![](./pictures/declarativeAddition)

**INSERT TABLE HERE**

**How Do Array Reducers Work?**

By taking in up to four different values, you return a single value based off of the values of each element of the array you put in!

## Features of Declarative Programming

- Focus on **WHAT** The Code does
- Abstract HOW it Works behind a function
- Condensed and Concise Logic

That was an example of array reducing, let's take a brief look at some other cool things you can do with arrays!

## Array Mapping

![](./pictures/mappingFunction)

Take in up to 3 values, and return a new array that is a modified version of the source array!

![](./pictures/mappingOutput)

## Array Filtering

![](./pictures/filteringFunction)

Take in up to 4 values and return a new array of only the values that "pass" the filtering function you put in!

![](./pictures/filteringOutput)

# Putting Everything Together!

What if you wanted to filter an array of values, map that new array to **another** array, and
finally reduce that **new new** array to a single accumulated value?

With the paradigm of functional programming, we never change the value of the array and instead create
**new** ones each time, operating on them with the various array operations we learned!

![](./pictures/filteringFunction)

![](./pictures/filteringOutput)

## Why Is Declarative Programming Useful For React Development?

- You can do a lot of complex logic in little amounts of code!
- With React, you're working with objects and arrays of data **a lot**, and object/array operations
  help in **manipulating** your data in various ways.
- You can even chain array/object operations together!

# Conclusion

Functional Programming is all about taking data and **transforming** it through functions!
Today we've touched upon

- Arrow Functions
- Array Mapping
- Array Reducing
- Array Filtering
  And in our exercises for this week we can see just how useful they are in React, since we're working with arrays of objects and react components all the time!
