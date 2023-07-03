import React from "react";
import "./AppWorking.css";

const AppWorking = (props) => {
  return (
    <>
      <main className="container2">
        <div className="left-column">
          <img src= {props.img} alt="" />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>{props.heading}</span>
            <h1>{props.subheading}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </main>
    </>
  );
};
export default AppWorking;
