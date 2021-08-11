import React, { useState, useEffect } from "react";
import "../App.css";
export default function PropDrillingPage() {
  return (
    <div className="odd-component">
      <div>Window With Prop Drilling</div>
      <IntermediateComponent1 />
    </div>
  );
}

function IntermediateComponent1() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }
  function getWindowHeight() {
    const { innerHeight: height } = window;
    return height;
  }

  //you can use all the react hooks we've talked about before as well!
  //setup event listener to update dimensions when they change
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
      setWindowHeight(getWindowHeight());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="even-component">
      <div>
        Here's a parent component that is forced to update due to hoisted state
        changes!
        <SonComponent windowWidth={windowWidth} windowHeight={windowHeight} />
        <DaughterComponent
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      </div>
    </div>
  );
}

interface WindowProps {
  windowWidth: number;
  windowHeight: number;
}

function SonComponent(props: WindowProps) {
  return (
    <div className="odd-component">
      <div>
        Here's a child component! It does its own stuff, uses the custom hook
      </div>
      <div>The window's width is: {props.windowWidth}</div>
      <div>The window's height is: {props.windowHeight}</div>
    </div>
  );
}

function DaughterComponent(props: WindowProps) {
  return (
    <div className="odd-component">
      <div>Here's another child component!</div>
      <div>The window's width is: {props.windowWidth}</div>
      <div>The window's height is: {props.windowHeight}</div>
      <div>Wow it does its own stuff too</div>
    </div>
  );
}
