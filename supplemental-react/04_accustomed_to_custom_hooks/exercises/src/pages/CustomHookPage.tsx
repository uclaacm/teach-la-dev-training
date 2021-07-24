import React from "react";
//no need for useState!
import "../App.css";
import { useWindowDimensions } from "../sharedLogic";
export default function CustomHookPage() {
  return (
    <div className="odd-component">
      <div>Window With Custom Hooks</div>
      <IntermediateComponent1 />
    </div>
  );
}

function IntermediateComponent1() {
  return (
    <div className="even-component">
      <div>
        Here's a parent component that we don't want to force to update!
        <SonComponent />
        <DaughterComponent />
      </div>
    </div>
  );
}

function SonComponent() {
  const [windowWidth, windowHeight] = useWindowDimensions();
  return (
    <div className="odd-component">
      <div>
        Here's a child component! It does its own stuff, uses the custom hook
      </div>
      <div>The window's width is: {windowWidth}</div>
      <div>The window's height is: {windowHeight}</div>
    </div>
  );
}

function DaughterComponent() {
  const [windowWidth, windowHeight] = useWindowDimensions();
  return (
    <div className="odd-component">
      <div>Here's another child component!</div>
      <div>The window's width is: {windowWidth}</div>
      <div>The window's height is: {windowHeight}</div>
      <div>Wow it does its own stuff too</div>
    </div>
  );
}
