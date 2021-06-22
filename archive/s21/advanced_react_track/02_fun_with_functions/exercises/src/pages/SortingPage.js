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

  return (
    <div>
      <div className="todo-container">
        TODO: Sort the restuarants in ascending order of their rating!
      </div>
      <div>Restaurants Sorted In Ascending Rating</div>

      <div>{displayedRestaurants}</div>
    </div>
  );
}
