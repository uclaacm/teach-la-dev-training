import React, { useState, useEffect } from "react";
import "../App.css";
export default function ReducingPage(props) {
  const [objData, setObjData] = useState({
    a: 1,
    b: 2,
  });
  useEffect(() => {
    console.log("component re-rendered!");
  });
  return (
    <div>
      <div className="todo-container">
        CAUTION: Pressing the update state button works once. Pressing it twice
        breaks the app. After what we talked about today, why does that happen?
        (Remember the concept of immutable data!)
      </div>
      <button
        class="button-container"
        onClick={() =>
          setObjData((prevObj) => {
            //How do we do this??
            objData.a++;
          })
        }
      >
        Update State?
      </button>
    </div>
  );
}

let a = [3, 4, 5];
let b = { ...a };
