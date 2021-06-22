import React, { useState } from "react";
import "../App.css";

export default function UseStateSolution(): JSX.Element {
  //SOLUTION: Using a State Variable
  const [hypedPeople, setHypedPeople] = useState(0);
  return (
    <div>
      <button
        className="button-container"
        //SOLUTION: Updating the State Variable Through an Arrow Function
        onClick={() => setHypedPeople((prevHypedPeople) => prevHypedPeople + 5)}
      >
        Day Of Code Hype Train
      </button>
      <button className="button-container" onClick={() => setHypedPeople(0)}>
        Reset the Hype Train
      </button>
      <div>
        There are {hypedPeople} people hyped for Day Of Code on April 24!
      </div>

      <div>
        {`Don't forget to `}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScrZqKPH2OK99jpT9BcOMCJrORkxl5NPKXxbtCvRnoS8qQCXw/viewform"
          rel="noreferrer noopener"
          target="_blank"
        >
          sign up
        </a>
        {` to volunteer if you haven't yet!`}
      </div>
    </div>
  );
}
