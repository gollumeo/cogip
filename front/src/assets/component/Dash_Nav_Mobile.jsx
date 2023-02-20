import React, { useState } from "react";
import "../scss/Dash_Nav_Mobile.scss";

const Dash_Nav_Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dash_nav_mobile">
      <div className="contact_mobile">
        <img
          className="dash_contact_img_mobile"
          src="../../../public/img/contact1.svg"
          alt="contact"
        />
        <h1 className="dash_contact_name_mobile">
          Henry <br /> George
        </h1>
      </div>
      <img
        className="burger_menu"
        src="../../../public/img/burger_menu_icon.png"
        alt=""
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Dash_Nav_Mobile;
