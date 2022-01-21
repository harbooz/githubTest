import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import p1 from "../assets/images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src={p1}
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="New Explore the hidden waterfall"
              label="Luxurry"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
