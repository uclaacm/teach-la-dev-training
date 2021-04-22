import React from "react";
import "../App.css";

export default function RestaurantBar(props) {
  return (
    <div className="restaurant-bar">
      <div>
        <img src={props.image} alt="the owner!" className="restaurant-image" />
      </div>
      <div>
        <div>{props.storeName}</div>
        <div className="restaurant-subheading">
          <div>
            {`Rating: `} {props.rating}
          </div>

          <div>
            {`Cuisine: `} {props.cuisine}
          </div>
        </div>
      </div>
    </div>
  );
}
