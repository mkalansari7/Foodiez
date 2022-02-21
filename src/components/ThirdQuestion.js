import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const ThirdQuestion = () => {
  return (
    <div className="main-page">
      {/* header */}
      <h2>Any food you dislike?</h2>
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
        <Link to={"/"}>
          <button>Start over</button>
        </Link>
        <Link to={"/ques2"}>
          <button>Back</button>
        </Link>
        <Link to={"/"}>
          <button>Done</button>
        </Link>
      </div>
    </div>
  );
};

export default ThirdQuestion;
