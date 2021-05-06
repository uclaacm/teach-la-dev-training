import React, { useState, useContext, createContext } from "react";
import "../App.css";

//Context Setup Outside of Component
/*since we are passing down state logic inside of our context, 
we initialize our context to an empty object!*/
const ButtonContext = createContext({});

function ButtonProvider(props) {
  //state variables to be passed down to component tree
  const [buttonSum, setButtonSum] = useState(0);
  return (
    <ButtonContext.Provider
      //pass in an OBJECT if you want multiple items within the context!
      value={{
        buttonSum,
        setButtonSum,
      }}
    >
      {/* props.children acts as a wrapper component for Higher Order Components!*/}
      {props.children}
    </ButtonContext.Provider>
    //Now everything wrapped inside the provider has access to the context!
  );
}

export default function ContextPage() {
  return (
    <ButtonProvider>
      <ContextPageContent />
    </ButtonProvider>
  );
}

function ContextPageContent(props) {
  const { buttonSum } = useContext(ButtonContext);

  return (
    <div className="odd-component">
      <div>
        <div>useContext Example</div>
        {`The button's counter is `} {buttonSum}
      </div>
      <IntermediateComponent1 />
    </div>
  );
}

function IntermediateComponent1(props) {
  return (
    <div className="even-component">
      <div>
        Here's a component that doesn't use props, and doesn't reference the
        context!
        <ChildComponentIncrementer />
        <ChildComponentDecrementer />
      </div>
    </div>
  );
}

function ChildComponentIncrementer(props) {
  const { setButtonSum } = useContext(ButtonContext);
  return (
    <div className="odd-component">
      <button
        class="button-container"
        onClick={() => setButtonSum((prevSum) => prevSum + 1)}
      >
        Increment Parent State!
      </button>
    </div>
  );
}

function ChildComponentDecrementer(props) {
  const { setButtonSum } = useContext(ButtonContext);
  return (
    <div className="odd-component">
      <button
        class="button-container"
        onClick={() => setButtonSum((prevSum) => prevSum - 1)}
      >
        Decrement Parent State!
      </button>
    </div>
  );
}
