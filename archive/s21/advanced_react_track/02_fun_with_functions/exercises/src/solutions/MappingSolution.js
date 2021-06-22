import React from "react";
import RestaurantBar from "../pages/RestaurantBar";
import restaurants from "../restaurants";
import "../App.css";

export default function ReducingPage(props) {
  const restaurantsList = [...restaurants];
  /*Example Restaurant: 
  {
    storeName: "Divya's Danishes",
    rating: 3.7,
    cuisine: "Danish",
    image: "https://teachla.uclaacm.com/img/team/dponniah.png",
  }
  */
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
      <div>All The Restaurants:</div>

      <div>{displayedRestaurants}</div>
    </div>
  );
}
