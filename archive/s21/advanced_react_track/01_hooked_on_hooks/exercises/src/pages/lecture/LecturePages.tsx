import React, { useState, useEffect } from "react";
import FunctionalLecturePage from "./FunctionalLecturePage";
import ClassLecturePage from "./ClassLecturePage";

export default function LecturePages(): JSX.Element {
  const [renderedComponent, setRenderedComponent] = useState("");

  useEffect(() => {
    return () => {
      setRenderedComponent("");
      console.log("unmounted!");
    };
  }, []);
  return (
    <div className="subcomponent-container">
      {renderedComponent && renderedComponent === "hooked" ? (
        <FunctionalLecturePage />
      ) : (
        <ClassLecturePage />
      )}
      <button
        className="button-container"
        onClick={() => setRenderedComponent("hooked")}
      >
        Render Hooked Component
      </button>
      <button
        className="button-container"
        onClick={() => setRenderedComponent("class")}
      >
        Render Class Component
      </button>
    </div>
  );
}
