import React, { useState } from "react";
import "../scss/Invoices_form.scss";

const Invoices_form = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://cogip-api.pierre-mauriello.be/invoices", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company_id: number }),
      });
      console.log(number);
      // let resText = await res.text(); // Get the response text
      // console.log(resText); // Log the response text to the console
      // let resJson = await res.json();
      if (res.status === 200) {
        setNumber("");
        setMessage("Invoice created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
      setMessage("Some error occurred");
      if (err instanceof SyntaxError) {
        setMessage("Unexpected response from server. Please try again later.");
      }
    }
  };

  return (
    <div className="new_invoice">
      <h3 className="new_invoice_title">New invoice</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          name="company_id"
          type="number"
          value={number}
          placeholder="Company ID..."
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit">Save</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default Invoices_form;
