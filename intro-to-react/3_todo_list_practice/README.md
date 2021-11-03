# Reviewing React and JS, Structuring React Components
In this third session, we will be highlighting:
- How to Structure React Components
- We will make a todo list together!

Here is a [video recording](https://drive.google.com/file/d/1P-q95xgpKeY6WnS00gB_kraNl9D0agIJ/view?usp=sharing) of this session!

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

## Why Functional over Class Based Components
- Less code & easier to read/understand (main reason)
- Slight performance benefits
- See more [here](https://reactjs.org/docs/hooks-intro.html#motivation)

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
- [Why Functional over Class Based](https://reactjs.org/docs/hooks-intro.html#motivation)
