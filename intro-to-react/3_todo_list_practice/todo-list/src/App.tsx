import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

function App() {
  const [list, setList] = useState(["make dinner"]);
  const [text, setText] = useState("");

  // const items = ["make dinner", "laundry", "walk the dog"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        ></input>
        <button
          onClick={() => {
            setList([...list, text]);
            setText("");
          }}
        >
          Submit
        </button>
        {list.map((i, index) => {
          return <Item text={i} list={list} setList={setList} index={index}/>;
        })}
      </header>
    </div>
  );
}

export default App;
