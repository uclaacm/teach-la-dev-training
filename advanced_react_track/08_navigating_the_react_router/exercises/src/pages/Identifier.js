import React from "react";
import "../App.css";

import { useParams } from "react-router-dom";

export default function Identifier(props) {
  let { currentSection } = useParams();
  return (
    <div className="odd-component">
      The URL currently contains {currentSection}
    </div>
  );
}
