import React from "react";
import Dash_Nav from "../component/Dash_Nav";
import Dash_Nav_Mobile from "../component/Dash_Nav_Mobile";
import Dash_welcome from "../component/Dash_welcome";
import Invoices_form from "../component/Invoices_form";
import "../scss/Dash_invoice.scss";

const Dashboard_new_invoice = () => {
  return (
    <div className="dash_invoice">
      <Dash_Nav />
      <div className="dash_invoice_main">
        <Dash_Nav_Mobile />
        <h2 className="dash_pos">Dashboard</h2>
        <p className="dash_pos_span">dashboard/invoices</p>
        <Dash_welcome />
        <Invoices_form />
      </div>
    </div>
  );
};

export default Dashboard_new_invoice;
