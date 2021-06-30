import React from "react";
import "../App.css";

import { useParams } from "react-router-dom";

interface IdentifierParams {
    currentSection : string;
}

export default function Identifier() {
  let { currentSection } = useParams<IdentifierParams>();
  return (
    <div className="odd-component">
      The URL currently contains {currentSection}
    </div>
  );
}