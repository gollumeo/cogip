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
          <img src={dashboard} className="dashboard-img" />
          <li>Dashboard</li>
          <img src={invoices} className="invoices-img" />
          <li>Invoices</li>
          <img src={companies} className="companies-img" />
          <li>Companies</li>
          <img src={contact} className="contact-img" />
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Dash_Nav;
