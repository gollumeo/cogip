import React from "react";
import "../scss/Invoices_form.scss";

const Contacts_form = () => {
  return (
    <div className="new_invoice">
      <h3 className="new_invoice_title">New invoice</h3>
      <hr />
      <form action="post">
        <input type="text" placeholder="Invoice number..." />
        <input type="date" placeholder="Dates due..." />
        <input type="text" placeholder="Company..." />
        <input type="date" placeholder="Created at..." />
        <button>Save</button>
      </form>
    </div>
  );
};

export default Contacts_form;
