import React from "react";
import RestaurantBar from "./RestaurantBar";
import restaurants from "../restaurants";
import "../App.css";

export default function ReducingPage(props) {
  const restaurantsList = [...restaurants];
  const displayedRestaurants = [];

  /*Example Restaurant: 
  {
    storeName: "Divya's Danishes",
    rating: 3.7,
    cuisine: "Danish",
    image: "https://teachla.uclaacm.com/img/team/dponniah.png",
  }
  */

  return (
    <div>
      <div className="todo-container">
        TODO: Given an array of restaurant objects, map them to an array of
        RestaurantBar React Components!
      </div>

      <div>All The Restaurants:</div>

      <div>{displayedRestaurants}</div>
    </div>
  );
}
