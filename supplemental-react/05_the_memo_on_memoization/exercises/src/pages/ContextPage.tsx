import React, { useState, useEffect, useContext } from "react";
import "../App.css";

interface WindowContextContainer {
  windowWidth: number;
  windowHeight: number;
}

interface ProviderProps {
  children: JSX.Element;
}

const defaultWindowContext: WindowContextContainer = {
  windowWidth: 0,
  windowHeight: 0,
};

const WindowContext = React.createContext(defaultWindowContext);
function WindowProvider(props: ProviderProps) {
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
    <WindowContext.Provider
      value={{
        windowWidth,
        windowHeight,
      }}
    >
      {props.children}
    </WindowContext.Provider>
  );
}

export default function ContextPage() {
  return (
    <WindowProvider>
      <ContextPageContent />
    </WindowProvider>
  );
}

function ContextPageContent() {
  return (
    <div className="odd-component">
      <div>Window With Context</div>
      <IntermediateComponent1 />
    </div>
  );
}

function IntermediateComponent1() {
  return (
    <div className="even-component">
      <div>
        Here's a parent component that is forced to update due to context!
        <SonComponent />
        <DaughterComponent />
      </div>
    </div>
  );
}

function SonComponent() {
  const { windowWidth, windowHeight } = useContext(WindowContext);
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
  const { windowWidth, windowHeight } = useContext(WindowContext);
  return (
    <div className="odd-component">
      <div>Here's another child component!</div>
      <div>The window's width is: {windowWidth}</div>
      <div>The window's height is: {windowHeight}</div>
      <div>Wow it does its own stuff too</div>
    </div>
  );
}
