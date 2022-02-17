import React from "react";
import Card from "./Card";
import "../Styles/Category.css";
const Home = () => {
  return (
    <div className="main-page">
      {/* header */}
      <h2>What is your favorite cuiines?</h2>
      {/* content */}
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* footer */}
    </div>
  );
};

export default Home;
