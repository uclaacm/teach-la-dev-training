import React, { useState } from "react";
import RestaurantBar from "./RestaurantBar";
import restaurants from "../restaurants";
import "../App.css";

export default function ReducingPage(props) {
  const restaurantsList = [...restaurants];
  const [threshold, setThreshold] = useState(0);
  const displayedRestaurants = [];

  const filteredRestaurants = [];

  //sort filteredRstaurants here!

  const averageRating = "Implement Me!";

  return (
    <div>
      <div className="todo-container">
        TODO: Map the restaurants into RestaurantBar react components, filter
        them by a threshold, sort the filtered restaurants in ascending order of
        rating, then display the average rating of all the restaurants that
        reach the threshold!
      </div>

      <div>The Average Rating is: {averageRating}</div>

      <div>Threshold: {threshold}</div>

      <div>
        {`Number of Restaurants: `} {filteredRestaurants.length}
      </div>
      <div>
        <button
          className={
            threshold === 1
              ? "button-container active-button"
              : "button-container"
          }
          onClick={() => setThreshold(1)}
        >
          1
        </button>
        <button
          className={
            threshold === 2
              ? "button-container active-button"
              : "button-container"
          }
          onClick={() => setThreshold(2)}
        >
          2
        </button>
        <button
          className={
            threshold === 3
              ? "button-container active-button"
              : "button-container"
          }
          onClick={() => setThreshold(3)}
        >
          3
        </button>
        <button
          className={
            threshold === 4
              ? "button-container active-button"
              : "button-container"
          }
          onClick={() => setThreshold(4)}
        >
          4
        </button>
        <button
          className={
            threshold === 5
              ? "button-container active-button"
              : "button-container"
          }
          onClick={() => setThreshold(5)}
        >
          5
        </button>
      </div>

      <div>{filteredRestaurants}</div>
    </div>
  );
}
