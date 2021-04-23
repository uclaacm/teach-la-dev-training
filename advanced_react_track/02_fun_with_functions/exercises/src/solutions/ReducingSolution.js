import React, { useEffect, useState } from "react";
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

  const averageRating =
    displayedRestaurants.reduce(
      (sum, restaurant) => sum + restaurant.props.rating,
      0
    ) / displayedRestaurants.length;

  //Logic for choosing random number interval

  return (
    <div>
      <div>The Average Rating is: {averageRating}</div>

      <div>{displayedRestaurants}</div>
    </div>
  );
}
