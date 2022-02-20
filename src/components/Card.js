import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, image, recipe }) => {
  console.log(recipe);
  return (
    <div className="myCard">
      <div className="shadow"></div>

      <h3>{name}</h3>

      <img alt="ing" src={image}></img>
    </div>
  );
};

export default Card;
