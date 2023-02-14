import React from "react";
import Contact_card from "../component/Contact_card";
import Footer from "../component/Footer";
import Nav2 from "../component/Nav2";
import "../scss/Show_invoices.scss";
import black_notebook_and_green_arm from "/public/img/black notebook and green arm.png";

const Show_invoices = () => {
  return (
    <div className="page">
      <img
        src={black_notebook_and_green_arm}
        alt="black_notebook_and_green_arm"
        className="green_arm"
      />
      <Nav2 />
      <div className="show_invoices">
        <h1 className="title">PIED PIPPER</h1>
        <ul className="company_infos">
          <li>
            <b>Name:</b>
          </li>
          <li>
            <b>TVA:</b>
          </li>
          <li>
            <b>Country:</b>
          </li>
          <li>
            <b>Type:</b>
          </li>
        </ul>
        <hr />
        <h1 className="title2">Contact People</h1>
        <div className="contact_cards">
          <Contact_card />
          <Contact_card />
          <Contact_card />
          <Contact_card />
        </div>
        <hr />
        <h2 className="title2">Last invoices</h2>
        <div className="invoices_table">
          <section className="table_last_invoices">
            <table>
              <thead>
                <tr>
                  <th>Invoice number</th>
                  <th>Dates due</th>
                  <th>Company</th>
                  <th>Created at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>F20220915-001</th>
                  <th>15/09/2022</th>
                  <th>Jouet Jean-Michel</th>
                  <th>25/09/2020</th>
                </tr>
                <tr>
                  <th>F20220915-002</th>
                  <th>15/09/2022</th>
                  <th>Dunder Mifflin</th>
                  <th>25/09/2020</th>
                </tr>
                <tr>
                  <th>F20220915-003</th>
                  <th>15/09/2022</th>
                  <th>Pierre Cailloux</th>
                  <th>25/09/2020</th>
                </tr>
                <tr>
                  <th>F20220915-004</th>
                  <th>15/09/2022</th>
                  <th>Pier Pipper</th>
                  <th>25/09/2020</th>
                </tr>
                <tr>
                  <th>F20220915-005</th>
                  <th>15/09/2022</th>
                  <th>Raviga</th>
                  <th>25/09/2020</th>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Show_invoices;
