# Advanced React Track

A look into how new features in React, JavaScript and its associated libraries can help us write cleaner, more efficient, and more maintainable code!

## Prerequisites

- Basic understanding of HTML/JSX
- Used JSX to create dynamic React components before, either class-based or hooked functional.
- Familiarity with React's parent->child component composition.

# Table of Contents

## [Session 1: Getting "Hooked" on React Hooks](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/01_hooked_on_hooks)

**Topics Covered:**

- Switching From Class-Based Components to Hooked Functional Ones
- The `useState` and `useEffect` hooks

## [Session 2: Fun With Functional Programming](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/02_fun_with_functions)

**Topics Covered:**

- Functional Vs Object Oriented Programming Paradigms
- Imperative Vs Declarative Programming Paradigms
- Declarative Array Manipulation: Mapping, Reducing, Filtering, Sorting

## [Session 3: Nested State of Mind](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/03_nested_state_of_mind)

**Topics Covered:**

- Handling state logic for nested data (objects, arrays)
- The `useReducer` hook
- Centralized state management for complex data

## [Session 4: Global State of Mind](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/04_global_state_of_mind)

**Topics Covered:**

- Prop Drilling Vs React Context for global state management
- The `useContext` hook

## [Session 5: Design Drama](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/05_design_drama)

**Topics Covered:**

- Style Guides
- Prototyping
- Responsive Design

## [Session 6: Accustomed To Custom Hooks](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/06_accustomed_to_custom_hooks)

**Topics Covered:**

- Custom Hooks (how to use them, why we would use them)
- Profiling React App Performance with React Dev Tools

## [Session 7: The Memo on Memoization](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/advanced_react_track/07_the_memo_on_memoization)

**Topics Covered:**

- How to improve React App performance with code restruturing and memoization
- The three tools of React memoization: `React.memo` for components, `useMemo` for function return values, and `useCallback` for functions themselves.

# Getting started!

Since all of us are currently on projects right now, it's good to get into the practice of looking at existing code-bases and adding in features/improvements as necessary!

## Forking Repositories

To do this, we're going to need to get used to **forking** repositories, which allows you to make changes/edits to existing projects without affecting the original "upstream" repository. If you decide to work on big open-source projects in the future, you'll do this **a lot!**

Here's a great [**tutorial**](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) on forking repositories from the lovely folks over at Git.

## Opening Up Each Week's Exercises

To get to each week's practice page, we're going to be using the VS.Code terminal. When you first open up a terminal of the repository you just forked, you'll get something like

`YOUR_USERNAME teachla-dev-training-s21 % `

To get to each week's practice page, we'll use the `cd` command to change directories and traverse through the repository!

Each `cd` command will go inside of a directory (folder), and you can check out our repository on github or use the `ls` command to see which files and directories exist on the directory you are currently in.

## Example of going into Week 1's Exercises

(**Tip:** If you press **tab** when entering directory names, it autofills it for you or lists the possible directories that share the same name!)

```
teachla-dev-training-s21 % cd advanced_react_track
advanced_react_track % cd 01_hooked_on_hooks
01_hooked_on_hooks % cd exercises
```

Once you're inside the React App for that week, just run

```
npm install
npm run
```

And you should be good to go!
