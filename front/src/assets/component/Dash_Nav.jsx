import React from "react";
import dashboard from "../img/dashboard.png";
import invoices from "../img/invoices.png";
import companies from "../img/companies.png";
import contact from "../img/contact.png";
import "../scss/Dash_Nav.scss";

const Dash_Nav = () => {
  return (
    <div className="dash_nav">
      <div className="dash_contact">
        <div className="dash_contact_top">
          <img
            className="dash_contact_img"
            src="../img/contact1.svg"
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

      <div className="logout_nav">
        <img
          className="dash_logout_img"
          src="../img/contact1.svg"
          alt="contact"
        />
        <p className="logout">Logout</p>
      </div>
    </div>
  );
};

export default Dash_Nav;
