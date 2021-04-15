import React, { useState, useEffect } from "react";
import FunctionalLecturePage from "./FunctionalLecturePage";
import ClassLecturePage from "./ClassLecturePage";

export default function LecturePages(props) {
  const [renderedComponent, setRenderedComponent] = useState(null);

  useEffect(() => {
    return () => {
      setRenderedComponent(null);
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
