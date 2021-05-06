# Global State of Mind

Last week, we discussed how the use of the `useReducer` hook helped to centralize state logic. Today, we'll talk about how the `useContext` hook can help to centralize state logic further and its pros and cons compared to "prop drilling" with React Components.

# What is ["Prop Drilling"](https://kentcdodds.com/blog/prop-drilling) Before State Management Tools Existed?

**Prop Drilling is the practice of passing down logic that is used across multiple components within React Component trees.**

![Prop Drilling Chart](./pictures/propDrilling.png)

# Pros of Prop Drilling

- With prop drilling, you are explicit about which child components need logic, and make each child component **independent** from the state logic used up above in the parent component.

- The flow of code is **linear** which means the exchange of logic only goes one way: parent --> children

INSERT PICTURE OF PASSING DOWN LOTS OF LOGIC THROUGH PROPS

## Back to Functional Programming

With functional programming, you regulate each component (or hook) to act independent of each other. The concept of prop drilling enforces this principle because in React, when you pass down props, the data is **immutable** [(more about immutable props!)](https://medium.com/swlh/react-js-passing-props-a65bb5200891) and can be thought of as constants passed down as function arguments in the child component's scope. When you use prop drilling, child components that use props passed down from the parent component don't listen to **ALL** state changes in the parent component and only change what they display accordingly when the props passed down to them change.

# Cons of Prop Drilling

- As you pass down props through more and more React components, it becomes harder and harder to add or remove logic from the "thread." In order to add or remove logic, you'll have to add or remove props through EVERY single component within the component tree. This can get annoying fast, and it can be easy to forget adding/removing props accordingly!
- If one component in the component tree doesn't rely on state logic of the parent but still has to pass it down to its children, the intermediary component receives props it will not use, in the concept called **over-forwarding props.**
- If you rename the props to something else, it gets very confusing which props correspond to state logic.

INSERT PICTURE OF COMPONENT NOT USING PROPS BUT PASSING DOWN

# How Do State Management Tools Solve the Problems?

Before React had state management tools built into the framework like `useContext` and `useReducer`, users had to rely on 3rd party state mangement tools like [React Redux](https://react-redux.js.org) or [Flux](https://facebook.github.io/flux/) to **centralize state logic.**

# Why would you want to centralize your state logic?

As discussed with prop drilling up above, having to "thread" your state logic across multiple components makes it cumbersome to remove or add props from the entire component tree, and is prone to user error of forgetting one here or there.

By centralizing state logic, we can achieve **global state** which makes it easy to add and remove logic for an entire component tree.

Going back to the image above...

![](./pictures/propDrilling.png)

Centralized state logic allows us to provide _context_ for an entire component tree and make changes in one component be reflected across the entire tree.

Like we have discussed last week, the `useReducer` hook is a way to centralize state logic for a single state instance by handling complex state with different action types and payloads. This week, we will discuss how the `useContext` hook and `React.createContext` allows us to centralize state logic across an entire component tree, not just a singular instance.

# The [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) Hook and React.createContext

Similar to `useReducer`, context in React requires set-up both outside the component tree you wish to use it in and set-up inside the components as well.

# Context Set-Up Outside of Component Trees

INSERT PICTURE OF REACT.CREATECONTEXTSETUP

First, you have to create a context object that will be passed down to components in its context. If it is a static value that will not change, you can initialize it to the value within the context object. Otherwise, if you want to pass down state logic to multiple components, you can pass in an empty object and add in the state logic later.

Once you have created a Context object, you must also create a Context Provider which will give the context to all "consumers" of the context. If your context is a static value, you can simply pass in its value in the `value` prop field. Otherwise, if you want to pass down state logic to consumers of the context, you must create a **Higher Order Component** which passes down state logic to its children through `ContextName.Provider`.

INSERT PICTURE OF HIGHER ORDER COMPONENT

# What is A [Higher Order Component?](https://reactjs.org/docs/higher-order-components.html)

A Higher Order Component, also called `FragmentContainers` in other state management tools, is a way to reduce rewriting code by creating a **template** for components that all rely on similar logic.

**EXAMPLE:** What if we wanted multiple components that all needed the same state variables? Making a template through HOC's help us centralize state logic in one place.

Inside HOC's with React Hooks, we can do everything we do with usual components like `useState`, `useEffect`, and so forth and **provide** the logic to children components (through `props.children`)! In the future we'll discuss how other concepts in React like custom hooks help to reduce rewriting code as well.

INSERT PICTURE OF PROPS.CHILDREN

# Context Set-up Inside Component Trees

Unlike with prop-drilling, you do not have to write all your state logic that you want to keep track of inside of the parent component of the tree.
Instead, you can selectively choose parts of the context that you need by simply calling `useContext` with the context object.

You can only `useContext` if somewhere above in the component tree (either the component or one of its parent components) is wrapped inside of the `ContextName.Provider` HOC.

INSERT PICTURE OF USE CONTEXT

Let's take a look at how context and the concept of HOC can allow for the **separation of concerns**, which means that we can create components that handle state logic and create separate children components that are solely responsible for displaying content.

![learning lab with Context](./pictures/bbuContext.png)

![learning lab logic with drilling](./pictures/bbuDrillingLogic.png)
![learning lab prop pass-down with drilling](./pictures/bbuDrillingRendering.png)

**NOTE:** While I said earlier how React context is similar to "global state", it is actually only global with respect to its component tree! Every instance of context has its own logic and is completely independent of each other! If you want to learn more about how this is possible in JavaScript with the concept of block vs function scoping, this is [a really nice write-up](https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe) all about how this type of scoping is possible!

# Pros of React Context

- The concept of Higher Order Components allow for the separation of concerns (separate components for state, separate components for rendering)

- You avoid having to rewrite code if multiple component trees need the same logic

-Easier to add and remove state logic from component trees since it's centralized inside of the context object.

# Cons of React Context

- Whenever **anything** inside the context object changes, React forces a re-render of everything that depends on the context.
  (If within a component tree a component is wrapped inside a `Context.Provider`, that component and all its children will re-render with changes inside the context object.)

- Be careful when you `useContext`, don't slap it in everywhere! Be aware that it will force re-renders whenever context objects change, so `useContext` in cases where most/all components in a tree will be re-rendered anyways so that this is not an optimization concern.

![Prop Drilling Chart](./pictures/propDrilling.png)

- The separation of concerns delinearizes the flow of logic from parent->child since the child components can directly change logic within the context as well.

- More setup required than simply making state logic inside the parent component.

# When Can Context Be Useful Compared to Prop Drilling?

- Keeping track of users logged in, letting them log in and out without having to pass down `props.user` throughout your entire app

![Authentication Context](./pictures/authProvider.png)

- Handling App-Wide behavior like a light/dark mode

![Light/Dark Mode](./pictures/lightDarkMode.png)

- When multiple react component trees all rely on the same logic and you want to avoid prop drilling

![Related Logic](./pictures/relatedLogic.png)

# Conclusion

There is no right and wrong answer for whether you should choose Prop Drilling or `useContext` for state management across an entire component tree. You should take a look at the pros and cons of each and see which one works best for your current use case!

![Drilling Pros and Cons](./pictures/drillingChart.png)
![Context Pros and Cons](./pictures/contextChart.png)
