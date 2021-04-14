# Getting "Hooked" on React Hooks
Why Switch From Writing Class-based Components To Hooked Components?
# The Problems With Classes
From when JavaScript ES6 back in 2015 introduced Classes to the language to late 2018, React.js only supported one way of creating components with complex logic: **classes**. Classes supported everything that made React websites dynamic from state logic to handling the component lifecycle.

![](./pictures/simplifiedLifecycleChart.png)

There were a couple of major flaws with classes from the get-go, however.
main problem with classes however, was that the component lifecycle forced an unintuitive style of thinking and overall confusing to implement.

![](./pictures/complexLifecycleChart.png)

### Writing Class-Based Components: WHEN do you things happen?

**INSERT CHART FROM SESSION HERE**

Since JavaScript is a functional programming language, creating React Components through classes also added an unnecessary level of complexity with the amount of boilerplating and restrictions that classes require.

![](./pictures/ewClasses.png)

## Hooks simplify logic and add readability to components.
When React Hooks were introduced to the world during React Conference 2018, they changed the mindset of creating complex React components.

### "With hooks we separate code not based on the lifecycle method name but based on what the code is doing" - Dan Abramov, React Development Team Member

# Writing Hooked Components: WHAT Do You Want To Happen?

**INSERT CHART FROM SESSION HERE**

# Converting From Classes To Hooks

## Binding To this --> Functional Closures

## this.state / this.setState --> useState

## componentLifecycle --> Hooks (Focus on useEffect for now)

# Conclusion
Hooked components reduce the boilerplating necessary for Class-based React Components, and stick true to JavaScript being a **functional** programming language as opposed to an Object-Oriented one.
