# The Memo On Memoization

Previously, we discussed how we could view the performance of our React Apps with React Dev Tools and saw first-hand how Context forces re-renders of everything that's a consumer of the Context.

While we saw how custom hooks helped prevent unnecessary re-renders, this week, we will discuss the steps we should take to improving our code's performance, and learn about the concept of memoization!

## Table of Contents

- [React Context Performance](#react-context-performance)
- [Custom Hook Performance](#custom-hook-performance)
- [Possible Issues With Custom Hooks](#possible-issues-with-custom-hooks)
- [Steps Of Improving React App Performance](#steps-of-improving-react-app-performance)
  - [Code Restructuring](#code-restructuring)
    - [What Code Restructuring Can Solve](#what-code-restructuring-can-solve)
- [Memoization](#memoization)
  - [How does memoization work](#how-does-memoization-work)
  - [React.memo](#react.memo)
  - [Making a memoized component](#making-a-memoized-component)
- [Improving Code Performance Through Memoization](#improving-code-performance-through-memoization)
- [Code Performance Analysis](#code-performance-analysis)
- [Optimzation Never Comes For Free](#optimization-never-comes-for-free)
- [When is Memoization Worth It](#when-is-memoization-worth-it)
- [Conclusion](#conclusion)

## React Context Performance

First, let's take a look again at performance differences within the profiler of `React Dev Tools` between context and custom hooks.

Everything wrapped within the `Context.Provider` has to re-render, including the gray `IntermediateComponent` which we specifically DO NOT want to re-render if it's expensive to!

By using custom hooks, we have seen how the compartmentalization of logic can help stop the unnecessary re-rendering of parts of an application that don't depend on the changing logic. By looking at the profiler, we were able to see that the `IntermediateComponent` was not forced to re-render!

## Custom Hook Performance

The intermediate component isn't forced to update due to us using the custom hook within each child component instead!

## Possible Issues With Custom Hooks

While custom hooks in this case were able to prevent rerenders on the parent component (`IntermediateComponent`), custom hooks raise a new set of problems if multiple children components within a tree depend on the same logic.

For instance, with our usage of the `useWindowDimensions` custom hook, we have to set up two event listeners for the window width at the **same time** due to both children components both individually using the `useWindowDimensions` hook. In a bit, we'll take a look at how we can address this with code-restructuring and memoization! But first, let's break down why custom hooks with state logic cause re-renders.

Within our code, we use the custom hook to listen to changes and only render the `DisplayWhenWide` component whenever the window Width goes past a certain amount.

```tsx
export default function CustomHookPage() {
  const [windowWidth, windowHeight] = useWindowDimensions();
  return (
    <div className="odd-component">
      {windowWidth > 800 && <DisplayWhenWide />}
      <div>Window With Custom Hooks</div>
      <IntermediateComponent1 />
    </div>
  );
}

function DisplayWhenWide() {
  return <div>Wide page huh</div>;
}
```

Since `useWindowDimensions` is a custom hook that we created, it's essentially an abstraction of the original logic which depends on both `useState` and `useEffect`.

**When would this make our component re-render then?**

Since a React component re-renders whenever any of its state variables change, changing the windowWidth of the browser causes everything within the page to re-render, even when it **shouldn't** have any effect on the page's content!

For instance, looking back at our representation of the code, we can see that the only time that the page's content actually changes is whenever the `windowWidth` variable goes above or below the `WIDTH_THRESHOLD` variable!

However, when we take a look at our code with React Dev Tools, we see that the rest of the content has to get re-rendered **multiple** times. This is due to the fact that the custom hook comes with `useState` and `useEffect` logic under the hood, causing the entire component to re-render when state changes. We'll go through the steps you can take to figure out how to prevent unnecessary rerenders!

INSERT PICTURE

There's a lot of ways that we can address this, and let's take a look at the steps necessary to do so!

## Steps of Improving React App Performance

Whenever performance becomes an issue within your React Apps and you want to optimize code by preventing unnecessary rerenders, you should follow these two steps in this order to address the issue.

- Move around your code's logic or restructure it in such a way so that only the sections directly tied to the logic update as necessary.
- If your problem can't be solved by simply moving around your code's logic, then memoize specific parts of your application. _(but only if it's worth it!)_

Let's see how we would use both methods (although the first is preferred) to help optimize the performance of our example component!

## Code Restructuring

The first step of figuring out if restructuring code can prevent unnecessary re-renders is by determining what renders should be _necessary_. By doing this, we can analyze both our code or the website itself!

Taking a look at the webpage alone, it seems as though only the progress bar on the left is affected by the changes in the window width.

![gifExample](./pictures/bbuPageOpen.gif)

And by looking at the code, we can see that the only thing within the `CustomHookPage` in the code that depends on the windowWidth is our `DisplayWhenWide` component since it conditionally renders depending on the windowWidth of the page.

**How can we restructure our code to reflect what happens within the site?**

Instead of conditionally rendering the `DisplayWhenWide` and handling whether or not it should show up inside the parent component, we can move that display logic to the child component instead and either render its content or null accordingly.

```tsx
export default function CustomHookPage() {
  //Now unnecessary!
  //const [windowWidth, windowHeight] = useWindowDimensions();
  return (
    <div className="odd-component">
      <StatefulDisplayWhenWide />
      <div>Window With Custom Hooks</div>
      <IntermediateComponent1 />
    </div>
  );
}

function StatefulDisplayWhenWide() {
  const [windowWidth, windowHeight] = useWindowDimensions();
  return windowWidth > 800 ? <div>Wide page huh</div> : null;
}
```

## What Code Restructuring Can Solve

While this seems like a really small change, it ends up actually making a big difference in terms of performance! If we take a look at the React Profiler, we see that the rest of the content on the UseContextPage component doesn't have to re-render whenever the window's dimensions are changed, only the `DisplayWhenWide` has to re-render!

**However...** the main reason that we were able to improve performance in the above example is because only one of the children component within the parent component relied on stateful logic. If we assume for a moment that we would **only** be able to use the `useWindowDimensions` custom hook inside of our top-level component or multiple components within the tree relied on that logic, then we would not have the liberty of optimization through code restructuring.

What if we wanted to add in another piece of logic that had to be held in the state of our parent component, but don't want our parent component to be forced to re-render everytime the state gets updated? If we assume for a moment that we would **only** be able to use the `useWindowDimensions` custom hook inside of our top-level component or multiple components within the tree relied on that logic, then we would not have the liberty of optimization through code restructuring.

## Memoization

In cases where code can't simply be moved around to improve performance, we would have to rely on a technique known as [Memoization](https://epicreact.dev/memoization-and-react/). At its core, memoization is the process of avoiding expensive computations. By "expensive computations," we mean operations that take up a lot of data or time like re-rendering big/expensive components or computing/calling expensive functions. (An example of an expensive function would be finding the average of an array of values that's thousands of elements long!)

## How Does Memoization Work?

React Memoization works by **caching** the data that you are memoizing, be it components or functions, and avoids re-rendering the component or recomputing the function until one of its **dependencies** change.

React offers us three methods of memoization that we can use, but today we'll just cover `React.memo` and the rest are pretty similar!

- `React.memo`
- `useMemo`
- `useCallback`

`React.memo` is a Higher Order Component used to memoize React components, `useMemo` is a hook used to memoize the values returned by expensive functions, and `useCallback` is a hook used to memoize functions themselves (this can be useful due to referential equality through the `Object.is` comparison that is used in React!)

## React.memo

Just like the rest of the memoization tools we discussed above, `React.memo` can be used as a way to prevent re-renders unless a component's dependencies change. Unlike the `useEffect` hook which took in two parameters: a function and that runs when a dependency changes and an array of dependencies, `React.memo` combines the two into its first argument: a React component. Instead of explicitly listing out its dependencies, React.memo does it implicitly by making the Component's **props** its dependencies.

useEffect Review:

```tsx
function MyComponent() {
  useEffect(
    () => {
      console.log("Component mounted!");
    },
    [
      /*optional dependency array*/
    ]
  );
  return <div></div>;
}
```

In other words, the memoized component will only re-render if its props change, or if the custom props equality check function you write returns false!

If you only store primitive data types like numbers, strings, booleans, etc inside of your props, then you can omit the second parameter of React.memo (the props equality check function) since shallow prop comparison will work! (nested data is always wonky, just like what we discussed in our session about objects in JavaScript and useReducer!)

Objects in JS Review:

```tsx
const arr: number[] = [1, 2, 3];
const arrRef = arr;
//why can we change arr's 2nd index even though it's const??
arr[2] = 4;
//arr and arrRef are both [1,2,4] now!

console.log(Object.is(arr, arrRef));
//prints out true!
```

The spread operator passes in the values within the object, but creates a new reference to a **new object** in memory!

| Variable | Value  | Address | Object  |
| -------- | ------ | ------- | ------- |
| arr      | <#001> | #001    | [1,2,3] |
| arrRef   | <#001> |         |         |

When we change arr[2] to 4...

| Variable | Value  | Address | Object  |
| -------- | ------ | ------- | ------- |
| arr      | <#001> | #001    | [1,2,4] |
| arrRef   | <#001> |         |         |

## Making a memoized component

```tsx
/* React.memo takes in two arguments
1. The react component which you are memoizing
2. An optional props equality check function if you can't compare with shallow comparisons
*/

interface MemoizedPageProps {
  isWide: boolean;
}

const MemoizedCustomHookPage = React.memo(
  //will only re-render if the props change!
  function CustomHookPage(props: MemoizedPageProps) {
    //this is the react component that we are memoizing!
    return (
      <div className="odd-component">
        {props.isWide && <DisplayWhenWide />}
        <div>Window With Custom Hooks</div>
        <IntermediateComponent1 />
      </div>
    );
  }
  //OPTIONAL custom props equality function
  //does shallow prop comparison by default
  //   (prevProps, nextProps) =>
  //   prevProps.nestedData.name === nextProps.nestedData.name
  //
);
```

## Improving Code Performance Through Memoization

Looking back at the original code for our example, we found out that handling the windowWidth inside of the parent component function causes the entirety of the `CustomHookPage` to re-render when ever the `windowWidth` variable changes, which could be expensive.

One way we can solve this is by creating a parent component that handles the state changes, and uses a Memoized version of the `CustomHookPage` component, and turning the `windowWidth > 800` qualifier into a prop that we pass down!

Let's see the full example in action!

```tsx
function CustomHookPage() {
  //a parent component that hanles all the state logic
  const [windowWidth] = useWindowDimensions();
  //the props handle whether or not the progress bar should be displayed
  return <MemoizedCustomHookPageContent isWide={windowWidth > 800} />;
}
interface MemoizedPageProps {
  isWide: boolean;
}
//Our memoized component
const MemoizedCustomHookPageContent = React.memo(function CustomHookPageContent(
  props: MemoizedPageProps
) {
  //this is the react component that we are memoizing!
  return (
    <div className="odd-component">
      {props.isWide && <DisplayWhenWide />}
      <div>Window With Custom Hooks</div>
      <IntermediateComponent1 />
    </div>
  );
});
```

In this example, we broke the `CustomHookPage` into a parent component which handles the state logic, and a memoized child component whose props depend on the state logic of the parent.

Since our child component is **memoized**, we only re-render it whenever its parent props change.

In this case, we don't have to pass in a custom prop equality check function as the second parameter to `React.memo` because our props is a simple primitive boolean and not nested data.

With this small change of memoization, we're able to prevent re-renders to the rest of the content on the page as well, let's take a look at the profiler!

(In cases of bigger components where things take a longer time to load)
And since the only thing that re-renders every time the windowWidth changes is our Higher Order parent component, we can see that we're able to reduce the render time for the wrapper component from as much as 1.3ms to as little as 0.1ms everytime, which gives us **7-10x better** performance on average!

This seems great for our use cases, but why is code restructuring preferred to memoization?

## Optimization Never Comes For Free

With memoization, you will also have to store a **cached version** of the memoized component inside your browser's memory (the dynamically allocated heap memory to be precise!) and it has more overhead that has to get carried for your browser. Everytime your memoized function re-renders, you have to _garbage collect_ the previously cached value by deleting it from memory and recache the new memoized value (which explains why the memoized value takes longer to render!). This constant deletion and insertion into the heap memory can get very intensive for your browser, which is why **if you constantly have to re-render a memoized component, it's not worth memoizing!**

## When is Memoization Worth It

Before you use memoization, you always have to ask yourself: **Is the added overhead of removing and adding to memory each time a memoized component re-renders worth it??** This extra overhead that comes with memoization is an extra thing you have to keep track of which is why code restructuring is the preferred method of performance optimization.

# Conclusion

In conclusion, through the use of React Dev Tools, we can profile the performance of our apps and see if there's unnecessary re-renders that we are triggering.

- First, you should try to simply restructure your code to see if you can improve performance by moving around which components are tied to logic.

- If code restructuring doesn't solve the issue, you can use React Memoization if it's worth the extra overhead that comes with it!

React offers us three methods of memoization:

- `React.memo` for React components
- `useMemo` for function return values
- `useCallback` for functions themselves
