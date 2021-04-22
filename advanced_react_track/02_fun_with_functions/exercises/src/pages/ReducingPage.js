import React from "react";
import RestaurantBar from "./RestaurantBar";
import restaurants from "../restaurants";
import "../App.css";

export default function ReducingPage(props) {
  const restaurantsList = [...restaurants];
  const displayedRestaurants = restaurantsList.map((restaurant) => (
    <RestaurantBar
      key={restaurant.storeName}
      storeName={restaurant.storeName}
      rating={restaurant.rating}
      cuisine={restaurant.cuisine}
      image={restaurant.image}
    />
  ));

  const averageRating = "Implement Me!";

  return (
    <div>
      <div className="todo-container">
        TODO: Return the average rating of all restaurants through an array
        reducer!
      </div>

      <div>The Average Rating is: {averageRating}</div>

      <div>{displayedRestaurants}</div>
    </div>
  );
}
