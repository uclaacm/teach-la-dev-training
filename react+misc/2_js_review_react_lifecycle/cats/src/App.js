import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function meow() {
  // can do other things here
  return "meow meow meow";
}

const meowArrow = () => "meow meow meow";

const meowArrowBrackets = () => {
  // can do other things here
  return "meow meow meow";
}

const cats = ["pickles", "oscar", "mittens", "boo"];
const cat_owner = { "alli": "pickles" };

// function loopThrough(array) {
//   cat_owner.regina = "human"; // not an error because const itself isn't being assigned
//   cat_owner = {"alli": "human"};

//   const x = 1; // error 1 const cant be reassigned
//   for (x = 0; x < 5; x++){ 
//     let number = 3;
//   }
//   console.log(number) // error 2 let is block scoped

//   for(var i = 0; i < 5; i++){
//   }
//   console.log(i); // not an error because var is function scoped
// }

const cat_owners = {
  "alli": 0,
  "melme": 0, 
  "gude": 0
}

function spreadOperatorDemo(array, object){
  const arr = [...array, "new thing for array"]
  const newObject = {"blehhh": "meow", ...object}
}

class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timeout = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
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
  const cat_owners = {
    "alli": 3,
    "melme": 0, 
    "gude": 4
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          Object.entries(cat_owners).map(([key, value]) => 
          <Cats name={key} startingPoint={value}/>)
        }
      </header>
    </div>
  );
}

export default App;
