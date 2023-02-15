import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Invoices from "./assets/pages/Invoices";
import Companies from "./assets/pages/Companies";
import Contacts from "./assets/pages/Contacts";
import Dashboard from "./assets/pages/Dashboard";
import Show_invoices from "./assets/pages/Show_invoices";
import Show_contact from "./assets/pages/Show_contact";
import Dashboard_new_invoice from "./assets/pages/Dashboard_new_invoice";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/show_invoices" element={<Show_invoices />} />
        <Route path="/show_contact" element={<Show_contact />} />
        <Route path="*" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/new-invoice"
          element={<Dashboard_new_invoice />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
