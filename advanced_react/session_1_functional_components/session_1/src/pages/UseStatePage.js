import React from "react";
import "../App.css";

export default function UseStatePage(props) {
  //How should we handle state?
  return (
    <div>
      <button className="button-container">Day Of Code Hype Train</button>
      <button className="button-container">Reset the Hype Train</button>

      <div className="todo-container">
        TODO: Make the left button increment the people hyped by 5, make the
        right button reset it back to zero!
        <p>(Also sign up for Day of Code)</p>
      </div>

      <div>There are 0 people hyped for Day Of Code on April 24!</div>

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
