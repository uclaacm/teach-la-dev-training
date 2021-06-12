import React, { useEffect, useState } from "react";
import "../App.css";

export default function UseEffectSolution(): JSX.Element {
  const [matchedNum, setMatchedNum] = useState(false);
  const [usersNum, setUsersNum] = useState<number | undefined>(undefined);
  const [randomNum, setRandomNum] = useState<number | null>(null);

  //Logic for choosing random number interval
  useEffect(() => {
    let pickNum = () => {
      setRandomNum(Math.ceil(Math.random() * 5));
    };
    let randInterval = setInterval(pickNum, 1000);

    return () => {
      clearInterval(randInterval);
    };
  }, []);

  //Logic for checking if the numbers match up, listening to changes from both the randomNum and the usersNum
  useEffect(() => {
    if (randomNum === usersNum) setMatchedNum(true);
  }, [randomNum, usersNum]);
  return (
    <div>
      <div>Random num from 1 to 5 is: {randomNum}</div>
      <div>Your chosen num is: {usersNum} </div>
      <div>
        <button className="button-container" onClick={() => setUsersNum(1)}>
          1
        </button>
        <button className="button-container" onClick={() => setUsersNum(2)}>
          2
        </button>
        <button className="button-container" onClick={() => setUsersNum(3)}>
          3
        </button>
        <button className="button-container" onClick={() => setUsersNum(4)}>
          4
        </button>
        <button className="button-container" onClick={() => setUsersNum(5)}>
          5
        </button>
      </div>
      {matchedNum && <div>Wow, we matched numbers! </div>}
    </div>
  );
}
