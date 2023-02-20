import React from "react";
import Contacts_form from "../component/Contact_form";
import Dash_Nav from "../component/Dash_Nav";
import Dash_Nav_Mobile from "../component/Dash_Nav_Mobile";
import Dash_welcome from "../component/Dash_welcome";
import "../scss/Dash_invoice.scss";

const Dashboard_contact = () => {
  return (
    <div className="dash_invoice">
      <Dash_Nav />
      <div className="dash_invoice_main">
        <Dash_Nav_Mobile />
        <Dash_welcome />
        <Contacts_form />
      </div>
    </div>
  );
};

export default Dashboard_contact;
