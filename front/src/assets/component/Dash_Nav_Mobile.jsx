import React, { useRef } from "react";
import "../scss/Dash_Nav_Mobile.scss";

const Dash_Nav_Mobile = () => {
  const menuHamburgerRef = useRef(null);
  const navLinksRef = useRef(null);

  const handleMenuClick = () => {
    navLinksRef.current.classList.toggle("menu");
  };

  return (
    <div>
      <div className="dash_nav_mobile">
        <div className="dash_nav_mobile_top">
          <div className="contact_mobile">
            <img
              className="dash_contact_img_mobile"
              src="../../public/img/contact1.svg"
              alt="contact"
            />
            <h1 className="dash_contact_name_mobile">
              Henry <br /> George
            </h1>
          </div>
          <img
            className="burger_menu"
            src="../../public/img/burger_menu_icon.png"
            alt=""
            ref={menuHamburgerRef}
            onClick={handleMenuClick}
          />
        </div>
        <div className="nav_links" ref={navLinksRef}>
          <ul>
            <li>Dashboard</li>
            <li>Invoices</li>
            <li>Companies</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dash_Nav_Mobile;
