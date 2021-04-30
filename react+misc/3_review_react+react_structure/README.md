# Reviewing React and JS, Structuring React Components
In this third session, we will be highlighting:
- Arrow Functions
- Array.map
- List and Keys
- Functional React
    - `useState`
- How to Structure React Components
(If any of these is confusing, please ask Regina for a better explanation!!)

# Mini Project Build On!
Make a list of Foods which you remove and add to. Allow for `View Single` or `View List` of foods, and circle through the list. Like food tinder but you can see all the options also :)

See an example [here](https://teach-la-react-training-s21.netlify.app/3)!

## Steps:
1. Follow this todo list example, and add in textInput
2. Make sure adding and removing Foods works
3. Have a button for toggling `View Single` or `View List`
4. Get `View Single` to work
    - Make sure `pass` works properly, and circulates back to the beginning
    - Deal with the case where all items are removed
5. Check that it works and you done! You are now a react P R O :)) 
Feel free to bop Regina on slack if you have any questions whatsoever (how to start, how to structure, what is an arrow function, anything is welcome :))

## Challenge:
Have the number of likes/passes per food persist!

# Lesson
Here are the video links:
 - [Part 1](https://drive.google.com/file/d/1qLl7HlVzQ-TMqf5oFzK_jT1KDfgtDoli/view?usp=sharing) 
 - [Part 2](https://drive.google.com/file/d/17m-6YY1nVLnY7mw8SCnVpPXvciL-Iq24/view?usp=sharing) 
 
 if you'd rather look at that!

## Arrow Functions
```
function someFunction() {

}
``` 
and 
``` 
const someFunction = () => {

}
```
are nearly the same with some slight differences. Try to use them when the functions are used in other functions.

In general, err on the side of using arrow functions, unless you know why normal functions are better.

## Array.map (functional mapping)
Map returns a list of returned values that the function called on every element returned.
Don't forget to make the `map` return a value!
```
array.map((value, index)=>{return <div> my index is {value} at index {index}</div>});
```

#### Quick Aside (please skip if not interested)
Object.entries or Object.key or Object.value(object_name) allows for Object mapping & forEach

### List and Keys
As per React docs,
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

React will get angry if you don't specify a key, so you should do something like this
```
array.map((value, index)=>{return <div key={value}> my index is {value} at index {index}</div>});
```
## Why Functional over Class Based Components
- Less code & easier to read/understand (main reason)
- Slight performance benefits
- See more [here](https://reactjs.org/docs/hooks-intro.html#motivation)

## UseState (state vs props)
### Props
These are the values passed into the Component
- Imagine it sort of like C++ constuctor variables
- props can't be modifed by the component itself
```
function ComponentName(props) {
    ...
}
```

### State
These are the variables that are modified in React. Only when these variables are modified, does React knows to rerender.
- Important: don't modify `state` directly, instead, use `setState`. This is because React only knows to check to rerender when you use `setState`, otherwise, it doesn't know that the state has changed.
- In general, thinking of `state` as Immutable. If you mess with it, some funky things might happen. Please don't forget to use `setState`
```
const [inputTask, setInputTask] = useState("mlem"); // clears this
```

In this example, `inputTask` is defaulted to `"mlem"`
At `[inputTask, setInputTask]` this is because `useState` effectively returns an array with two elements. The first being the stateVariable, and the second being the setter of the stateVariable, essentially `[stateVar, setterOfStateVar]`

## Structuring React Components
This takes a bit of time to build the intuition, but try to pick out what's being duplicated, or seperate concerns so that there isn't just one huge React Component. 

In general, try to have a different file for every React Component, and to export the component, you can have a `export default ComponentName;` in the file.

You might need to pass functions as `props` to children components. Children components are components in a parent component's JSX. 

Take a look at [App.js](https://github.com/uclaacm/teach-la-dev-training-s21/blob/main/react%2Bmisc/3_review_react%2Breact_structure/todo-list/src/App.js) and [Task.js](https://github.com/uclaacm/teach-la-dev-training-s21/blob/main/react%2Bmisc/3_review_react%2Breact_structure/todo-list/src/Task.js) for structuring a todo list.

## Other Info
The rest of the time was spent building the ToDo list, so <b>make sure to take a look at `App.js` and `Task.js`</b> and check that it all makes sense. 

## Additional Information
From React Docs,
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
Note that some things happen on `componentDidMount`, or when the component was started, `componentWillUnmount`, or when the component was about to be destroyed. Things can also happen `componentDidUpdate`, or just after the component render. 

We have the same equivalent version in Functional Components
###`UseEffect` 
UseEffect is basically a similar replacement of the lifecycle methods. Like so,
```
  useEffect(() => {
    console.log("componentDidMount");
  },[]);

  useEffect(() => {
    console.log("componentDidUpdate!");
    return () => {console.log("componentWillUnmount")};
  });
```
for `ComponentDidMount`, note the `},[])`
for `ComponentWillUnmount`, note that the `useEffect` is returning a cleanup function that will run when the component is unmounting.

### Conclusion
Hopefully after this, you understand React more clearly and are able to make the build-along [here](https://github.com/uclaacm/teach-la-dev-training-s21/tree/main/react%2Bmisc/3_review_react%2Breact_structure#mini-project-build-on)!! 

# Resources 
- [Why and when to use Arrow Function](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
- [What are React Keys?](https://reactjs.org/docs/lists-and-keys.html#keys)
- [Why Functional over Class Based](https://reactjs.org/docs/hooks-intro.html#motivation)
