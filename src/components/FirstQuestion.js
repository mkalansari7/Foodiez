import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const FirstQuestion = () => {
  return (
    <div className="main-page">
      {/* header */}
      <h2>What is your favorite cuisine?</h2>
      {/* content */}
      <div className="content">
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
        <Card name="hgg" image="./assets/img/logo.jpg" />
      </div>
      {/* footer */}
      <div className="homeB">
        <Link to={"/ques2"}>
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstQuestion;
