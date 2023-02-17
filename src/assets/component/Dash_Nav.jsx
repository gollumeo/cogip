import React from "react";
import dashboard from "/img/dashboard.png";
import invoices from "/img/invoices.png";
import companies from "/img/companies.png";
import contact from "/img/contact.png";
import "../scss/Dash_Nav.scss";

const Dash_Nav = () => {
  return (
    <div className="dash_nav">
      <div className="contact">
        <div className="contact_top">
          <img
            className="dash_contact_img"
            src="../../public/img/contact1.svg"
            alt="contact"
          />
          <h1 className="dash_contact_name">
            Henry <br /> George
          </h1>
        </div>
        <div className="dash_navigation_list">
          <ul>
            <div className="li_nav">
              <img src={dashboard} className="dashboard-img" />
              <li>Dashboard</li>
            </div>
            <div className="li_nav">
              <img src={invoices} className="invoices-img" />
              <li>Invoices</li>
            </div>
            <div className="li_nav">
              <img src={companies} className="companies-img" />
              <li>Companies</li>
            </div>
            <div className="li_nav">
              <img src={contact} className="contact-img" />
              <li>Contacts</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="logout_nav">
        <img
          className="dash_contact_logout"
          src="../../public/img/contact1.svg"
          alt="contact"
        />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Dash_Nav;
