import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="myCard">
      <div className="shadow"></div>
      <h3>{name}</h3>

      <img alt="ing" src={image}></img>
    </div>
  );
};

export default Card;
