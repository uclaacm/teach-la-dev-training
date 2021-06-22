import React, { useState } from "react";
import "../App.css";
export default function PropDrillingPage(props) {
  const [buttonSum, setButtonSum] = useState(0);
  return (
    <div className="odd-component">
      <div>Prop Drilling Example</div>
      <div>
        {`The button's counter is `} {buttonSum}
      </div>
      <IntermediateComponent1
        buttonSum={buttonSum}
        setButtonSum={setButtonSum}
      />
    </div>
  );
}

function IntermediateComponent1(props) {
  return (
    <div className="even-component">
      <div>
        Here's a component that doesn't use its props, only passes it down to
        its children!
        <ChildComponentIncrementer
          buttonSum={props.buttonSum}
          setButtonSum={props.setButtonSum}
        />
        <ChildComponentDecrementer
          buttonSum={props.buttonSum}
          setButtonSum={props.setButtonSum}
        />
      </div>
    </div>
  );
}

function ChildComponentIncrementer(props) {
  return (
    <div className="odd-component">
      <button
        class="button-container"
        onClick={() => props.setButtonSum((prevSum) => prevSum + 1)}
      >
        Increment Parent State!
      </button>
    </div>
  );
}

function ChildComponentDecrementer(props) {
  return (
    <div className="odd-component">
      <button
        class="button-container"
        onClick={() => props.setButtonSum((prevSum) => prevSum - 1)}
      >
        Decrement Parent State!
      </button>
    </div>
  );
}
