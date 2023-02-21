import React, { useRef } from "react";
import "../scss/Dash_Nav_Mobile.scss";
import dashboard from "../img/dashboard.png";
import invoices from "../img/invoices.png";
import companies from "../img/companies.png";
import contact from "../img/contact.png";

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
              src="img/contact1.svg"
              alt="contact"
            />
            <h1 className="dash_contact_name_mobile">
              Henry <br /> George
            </h1>
          </div>
          <img
            className="burger_menu"
            src="img/burger_menu_icon.png"
            alt=""
            ref={menuHamburgerRef}
            onClick={handleMenuClick}
          />
        </div>
        <div className="nav_links" ref={navLinksRef}>
          <ul>
            <div className="li_nav">
              <img src={dashboard} className="dashboard-img" />
              <li>
                <a href="/dashboard/">Dashboard</a>
              </li>
            </div>
            <div className="li_nav">
              <img src={invoices} className="invoices-img" />
              <li>
                <a href="/dashboard/new-invoice">Invoices</a>
              </li>
            </div>
            <div className="li_nav">
              <img src={companies} className="companies-img" />
              <li>
                <a href="/dashboard/new-companies">Companies</a>
              </li>
            </div>
            <div className="li_nav">
              <img src={contact} className="contact-img" />
              <li>
                <a href="/dashboard/contacts">Contacts</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dash_Nav_Mobile;
