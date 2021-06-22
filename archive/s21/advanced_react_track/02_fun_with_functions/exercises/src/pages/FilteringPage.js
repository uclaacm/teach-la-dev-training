import React, { useState } from "react";
import RestaurantBar from "./RestaurantBar";
import restaurants from "../restaurants";
import "../App.css";

export default function UseEffectPage(props) {
  const restaurantsList = [...restaurants];
  const [threshold, setThreshold] = useState(0);

  const displayedRestaurants = restaurantsList.map((restaurant) => (
    <RestaurantBar
      key={restaurant.storeName}
      storeName={restaurant.storeName}
      rating={restaurant.rating}
      cuisine={restaurant.cuisine}
      image={restaurant.image}
    />
  ));

  const filteredRestaurants = [...displayedRestaurants];

  return (
    <div>
      <div className="todo-container">
        TODO: Filter Restaurants By Only Displaying The Ones Above The
        Threshold's Rating!
      </div>
      <div>Threshold: {threshold}</div>
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

      <div>
        {`Number of Restaurants: `} {filteredRestaurants.length}
      </div>
      {filteredRestaurants}
    </div>
  );
}
