import React from "react";
import "../scss/Dash_Nav.scss";

const Dash_Nav = () => {
  return (
    <div className="dash_nav">
      <div className="contact">
        <img
          className="dash_contact_img"
          src="../../public/img/contact1.svg"
          alt="contact"
        />
        <h1 className="dash_contact_name">
          Henry <br /> George
        </h1>
      </div>
      <hr />
    </div>
  );
};

export default Dash_Nav;
