import React from "react";
import { useParams } from "react-router";
import "../App.css";


//Parameters are always passed in as strings!
interface RandomNumParams {
    first : string;
    second : string;
}

export default function RandomNum() {
  const { first, second } = useParams<RandomNumParams>();
  return (
    <div className="odd-component">
      This is The Random Nums Page!
      <div>The first number passed in is {first} </div>
      <div>The second number passed in is {second}</div>
    </div>
  );
}