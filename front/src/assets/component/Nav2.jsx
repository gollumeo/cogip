import React from "react";
import { NavLink } from "react-router-dom";
import "/src/assets/scss/Nav.css";
import BurgerMenu from "/public/img/burger_menu_icon.png";
import { useState } from "react";
import white_shape from "/public/img/Rectangle 10.png";
import "/src/assets/scss/Nav2.scss";

function Nav2() {
  const [isOpen, setIsOpen] = useState(false);

  const displayValue = isOpen ? "flex" : "none";

  return (
    <div className="header">
      <header>
        <h1>COGIP</h1>
        <nav className="all">
          <button className="burger" onClick={() => setIsOpen(!isOpen)}>
            <img src={BurgerMenu} alt="BurgerMenu" className="burger_menu" />
          </button>
          <div
            className="nav_pages"
            style={{
              display: displayValue,
              ...(window.matchMedia("(min-width: 1280px)").matches && {
                display: "flex",
              }),
            }}
          >
            <ul className="list_pages">
              <NavLink to="/" className="nav_link">
                <li className="page">Home</li>
              </NavLink>
              <NavLink to="/invoices" className="nav_link">
                <li className="page">Invoices</li>
              </NavLink>
              <NavLink to="/companies" className="nav_link">
                <li className="page">Companies</li>
              </NavLink>
              <NavLink to="/contacts" className="nav_link">
                <li className="page">Contacts</li>
              </NavLink>
            </ul>
          </div>
          <div
            className="nav_log"
            style={{
              display: displayValue,
              ...(window.matchMedia("(min-width: 1280px)").matches && {
                display: "flex",
              }),
            }}
          >
            <ul className="list_log">
              <NavLink to="*" className="nav_link_2">
                <li className="sign_up">Sign up</li>
              </NavLink>
              <NavLink to="*" className="nav_link">
                <li className="login">Login</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
      <img src={white_shape} alt="white shape" className="white_shape" />
    </div>
  );
}

export default Nav2;
