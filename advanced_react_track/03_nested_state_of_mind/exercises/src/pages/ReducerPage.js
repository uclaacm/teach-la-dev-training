import React, { useReducer, useState } from "react";
import DataChart from "./DataChart";

//Set up your initial state for your data outside the component!
const initialComplexState = [
  {
    x: "Object 1",
    y: 0,
    weight: 0.2,
  },
  {
    x: "Object 2",
    y: 5,
    weight: 0.2,
  },
  {
    x: "Object 3",
    y: 5,
    weight: 0.2,
  },
  {
    x: "Object 4",
    y: 5,
    weight: 0.2,
  },
  {
    x: "Object 5",
    y: 5,
    weight: 0.2,
  },
];

//if you're feeling fancy with functional and programming
const nums = [1, 2, 3, 4, 5];
const fancyInitialState = nums.map((num) => ({
  x: "Object " + num,
  y: 5 * (num - 1),
  weight: 0.2,
}));

//pass in your current complex state object, and what action you want to take
const reducerFunction = (complexState, action) => {
  console.log("entered function!");
  switch (action.type) {
    //separate logic based on what you want to do

    case "incrementAll": {
      console.log("entered increment All!");
      /*return a NEW OBJECT that is based off of the previous state,
        DON'T modify the previous one!*/
      //map returns a new array, doesn't modify the previous one!
      return complexState.map((nestedObj) => ({
        ...nestedObj,
        y: nestedObj.y + 1,
      }));
    }

    case "incrementOne": {
      //you can also specify what you want to do with an action.payload!
      return complexState.map((nestedObj) => {
        if (nestedObj.x === action.payload) {
          return { ...nestedObj, y: nestedObj.y + 1 };
        } else return nestedObj; //only modify the specific one through payload!
      });
    }

    case "reset": {
      return complexState.map((nestedObj) => ({
        ...nestedObj,
        y: 0,
      }));
    }

    case "sort": {
      return complexState.sort((first, second) => second.y - first.y);
    }

    default: {
      console.log("Error!");
    }
  }
};

export default function ReducerPage(props) {
  //left side: a name to read the data of our state, and a "dispatch" function to update the state

  /*args passed into useReducer: the function which you will pass your "dispatch function" to, and
    initial state */
  const [ourData, dispatchData] = useReducer(
    reducerFunction,
    fancyInitialState
  );

  //function to randomly pick an object to increment by "value" times
  function pickValue(value) {
    for (let i = 0; i < value; i++) {
      let prob = Math.random();
      let threshold = 0;
      //randomly select ad from dataset
      for (let obj of ourData) {
        threshold += parseFloat(obj.weight);
        if (threshold > prob) {
          dispatchData({ type: "incrementOne", payload: obj.x });
          break; //exit once value is selected
        }
      }
    }
    //sort adFrequencies by y value
    dispatchData({ type: "sort" });
  }

  //we can call our dispatch function, passing in an "action" object
  /*within the action object, we can specify things like the type and payload
  which we set up earlier!*/
  function addToY(name) {
    dispatchData({ type: "incrementOne", payload: name });
    dispatchData({ type: "sort" });
  }

  return (
    <div>
      <div>The Power Of Use Reducer!</div>

      <div>
        <button
          className="button-container"
          onClick={() => dispatchData({ type: "incrementAll" })}
        >
          Add 1
        </button>
        <button className="button-container" onClick={() => pickValue(100)}>
          Randomly Pick 100 times
        </button>
        <button
          className="button-container"
          onClick={() => dispatchData({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <div>
        <button className="button-container" onClick={() => addToY("Object 1")}>
          Object 1++
        </button>
        <button className="button-container" onClick={() => addToY("Object 2")}>
          Object 2++
        </button>
        <button className="button-container" onClick={() => addToY("Object 3")}>
          Object 3++
        </button>
        <button className="button-container" onClick={() => addToY("Object 4")}>
          Object 4++
        </button>
        <button className="button-container" onClick={() => addToY("Object 5")}>
          Object 5++
        </button>
      </div>
      <DataChart data={ourData} />
    </div>
  );
}

const primitiveData = 32;

const nestedArray = [1, 2, 3, 4];

const nestedObjectArray = [
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 2,
  },
];
