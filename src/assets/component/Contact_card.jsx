import React from "react";
import "../scss/Contact_card.scss";

const Contact_card = () => {
  return (
    <div className="contact_card">
      <img
        className="contact_img"
        src="../../../public/img/contact1.svg"
        alt=""
      />
      <b>
        <p>Henry George</p>
      </b>
    </div>
  );
};

export default Contact_card;
