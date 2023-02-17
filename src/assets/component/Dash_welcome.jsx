import React from "react";
import "../scss/Dash_welcome.scss";

const Dash_welcome = () => {
  return (
    <div className="welcome">
      <img className="illustr" src="../../public/img/illustr.png" alt="" />
      <div className="welcome_div">
        <h1 className="welcome_title">Welcome back Henry!</h1>
        <p className="welcome_text">
          You can here add an invoice, a company and some contacts
        </p>
      </div>
    </div>
  );
};

export default Dash_welcome;
