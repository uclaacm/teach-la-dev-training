import React, { useReducer, useState } from "react";
import DataChart from "./DataChart";

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

type Histogram = HistogramSection[];

interface HistogramSection {
  x: string;
  y: number;
  weight: number;
}

enum HistogramActionType {
  INCREMENT_ALL,
  INCREMENT_ONE,
  RESET,
}

interface HistogramAction {
  type: HistogramActionType;
  sectionName?: string;
}

const nums = [1, 2, 3, 4, 5];
const initialHistogram: Histogram = nums.map((num) => ({
  x: "Object " + num,
  y: 20 - 5 * (num - 1),
  weight: 0.2,
}));

const histogramReducer = (
  prevHistogram: Histogram,
  action: HistogramAction
) => {
  switch (action.type) {
    case HistogramActionType.INCREMENT_ALL: {
      const newHistogram = prevHistogram.map((section) => ({
        ...section,
        y: section.y + 1,
      }));

      newHistogram.sort((a, b) => b.y - a.y);
      return newHistogram;
    }

    case HistogramActionType.INCREMENT_ONE: {
      const newHistogram = prevHistogram.map((section) => {
        if (section.x === action.sectionName) {
          return { ...section, y: section.y + 1 };
        } else return section;
      });

      newHistogram.sort((a, b) => b.y - a.y);
      return newHistogram;
    }

    case HistogramActionType.RESET: {
      const newHistogram = prevHistogram.map((arr) => ({ ...arr, y: 0 }));
      newHistogram.sort((a, b) => (a.x < b.x ? -1 : 1));
      return newHistogram;
    }

    default: {
      return prevHistogram;
    }
  }
};

// const histogramReducer = (
//   prevHistogram: Histogram,
//   action: HistogramAction
// ): Histogram => {
//   switch (action.type) {
//     case HistogramActionType.INCREMENT_ALL: {
//       /* return a NEW ARRAY that is based off of the previous state,
//       DON'T modify the previous one!
//       */
//       //increment just one section
//       const newHistogram: Histogram = prevHistogram.map((section) => ({
//         ...section,
//         y: section.y + 1,
//       }));
//       newHistogram.sort((a, b) => b.y - a.y);
//       return newHistogram;
//     }

//     case HistogramActionType.INCREMENT_ONE: {
//       //specifying which one to increment through our action.sectionName
//       const newHistogram = prevHistogram.map((section) => {
//         if (section.x === action.sectionName) {
//           return { ...section, y: section.y + 1 };
//         } else return section;
//       });
//       newHistogram.sort((a, b) => b.y - a.y);
//       return newHistogram;
//     }

//     case HistogramActionType.RESET: {
//       //reset everything to zero
//       const zeroHistogram: Histogram = prevHistogram.map((section) => ({
//         ...section,
//         y: 0,
//       }));
//       //sort the histogram alphabetically
//       zeroHistogram.sort((a, b) => (a.x > b.x ? 1 : -1));
//       return zeroHistogram;
//     }

//     default: {
//       return prevHistogram;
//     }
//   }
// };

export default function ReducerPage() {
  //left side: a name to read the data of our state, and a "dispatch" function to update the state
  const [nums, setNums] = useState([1, 2, 3]);
  //increment

  /*args passed into useReducer: the function which you will pass your "dispatch function" to, and
      initial state */
  const [dataHistogram, dispatchDataHistogram] = useReducer(
    histogramReducer,
    initialHistogram
  );

  //function to randomly pick an object to increment by "value" times
  function pickValue(value: number) {
    for (let i = 0; i < value; i++) {
      let prob = Math.random();
      let threshold = 0;
      //randomly select ad from dataset
      for (let obj of dataHistogram) {
        threshold += obj.weight;
        if (threshold > prob) {
          dispatchDataHistogram({
            type: HistogramActionType.INCREMENT_ONE,
            sectionName: obj.x,
          });
          break; //exit once value is selected
        }
      }
    }
  }

  //we can call our dispatch function, passing in an "action" object
  /*within the action object, we can specify things like the type and payload
    which we set up earlier!*/
  function addToY(name: string) {
    dispatchDataHistogram({
      type: HistogramActionType.INCREMENT_ONE,
      sectionName: name,
    });
  }

  return (
    <div>
      <div>The Power Of Use Reducer!</div>

      <div>
        <button
          className="button-container"
          onClick={() =>
            dispatchDataHistogram({ type: HistogramActionType.INCREMENT_ALL })
          }
        >
          Add 1
        </button>
        <button className="button-container" onClick={() => pickValue(100)}>
          Randomly Pick 100 times
        </button>
        <button
          className="button-container"
          onClick={() =>
            dispatchDataHistogram({ type: HistogramActionType.RESET })
          }
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
      <DataChart data={dataHistogram} />
    </div>
  );
}
