import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function motherFunction() {
  console.log("This is a parent function that does its own stuff!");

  console.log("It also calls the child function!");
  childFunction();
  console.log("It does more stuff afterwards too!");
}

function fatherFunction() {
  console.log("This parent function also does its own stuff!");
  console.log("It calls the child function too.");
  childFunction();
  console.log("This ones does its own stuff afterwards too!");
}

function childFunction() {
  console.log("This is our child function!");
}

motherFunction();
fatherFunction();
