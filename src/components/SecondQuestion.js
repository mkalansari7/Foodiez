import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const SecondQuestion = () => {
  return (
    <div className="main-page">
      {/* header */}
      <h2>any allergies?</h2>
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
        <Link to={"/"}>
          <button>Back</button>
        </Link>
        <Link to={"/ques3"}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default SecondQuestion;
