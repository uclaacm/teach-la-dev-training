import React, { useEffect, useState } from "react";
import "../App.css";

export default function UseEffectPage(): JSX.Element {
  const [matchedNum, setMatchedNum] = useState(false);
  const [randomNum, setRandomNum] = useState<number | null>(null);

  //Logic for choosing random number interval
  useEffect(() => {
    let pickNum = () => {
      setRandomNum(Math.ceil(Math.random() * 5));
    };
    let randInterval = setInterval(pickNum, 1000);

    //We do all our cleanup effects inside the return statement!
    return () => {
      clearInterval(randInterval);
    };
  }, []);

  return (
    <div>
      <div className="todo-container">
        TODO: With this given UI, make the number buttons update your chosen
        num, and display to the user that you matched numbers when the random
        num becomes the same as the user's num at least once.
      </div>
      <div>Random num from 1 to 5 is: {randomNum}</div>
      <div>Your chosen num is: {null} </div>
      <div>
        <button className="button-container">1</button>
        <button className="button-container">2</button>
        <button className="button-container">3</button>
        <button className="button-container">4</button>
        <button className="button-container">5</button>
      </div>
      {matchedNum && <div>Wow, we matched numbers! </div>}
    </div>
  );
}
