import React from "react";
import Footer from "../component/Footer";
import Nav2 from "../component/Nav2";
import Show_invoices_top from "../component/Show_invoices_top";
import Last_invoices from "../component/Last_invoices";
import "../scss/Show_invoices.scss";

const Show_invoices = () => {
  return (
    <div>
      <Nav2 />
      <Show_invoices_top />
      <hr />
      <h1 className="title2">Contact People</h1>
      <hr />
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
      <Footer />
    </div>
  );
};

export default Show_invoices;
