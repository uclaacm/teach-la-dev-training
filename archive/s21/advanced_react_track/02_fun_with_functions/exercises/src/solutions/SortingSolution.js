import React from "react";
import RestaurantBar from "../pages/RestaurantBar";
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

  displayedRestaurants.sort(
    (first, second) => first.props.rating - second.props.rating
  );

  return (
    <div>
      <div>Restaurants Sorted in Ascending Rating:</div>

      <div>{displayedRestaurants}</div>
    </div>
  );
}
