import React from "react";
import "../scss/Show_invoices.scss";

const Show_invoices_top = () => {
  return (
    <div className="show_invoices">
      <h1 className="title">PIED PIPPER</h1>
      <ul className="infos">
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
    </div>
  );
};

export default Show_invoices_top;
