import React from 'react';
import { NavLink } from 'react-router-dom';
import "/src/assets/scss/Nav.css";
import BurgerMenu from '/public/img/burger_menu_icon.png';
import { useState } from 'react';

function Nav(){

  const [ isOpen, setIsOpen ] = useState(false);
  // console.log(isOpen);

  const showBurgerMenu = () => {
    setIsOpen(!isOpen)
  };


const displayValue = isOpen ? 'flex' : 'none';

return (
  <header>
    <h1>COGIP</h1>
    <nav className="all">
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        <img src={BurgerMenu} alt="BurgerMenu" className='burger_menu'/>
      </button>
      <div className="nav_pages" style={{ display: displayValue, ...(window.matchMedia("(min-width: 1280px)").matches && {display: 'flex'}) }}>
        <ul className='list_pages'>
          <NavLink to ="/" className="nav_link">
            <li className='page'>Home</li>
          </NavLink>
          <NavLink to="/invoices" className="nav_link">
            <li className='page'>Invoices</li>
          </NavLink>
          <NavLink to="/companies" className="nav_link">
            <li className='page'>Companies</li>
          </NavLink>
          <NavLink to="/contacts" className="nav_link">
            <li className='page'>Contacts</li>
          </NavLink>
        </ul>
      </div>
      <div className="nav_log" style={{ display: displayValue, ...(window.matchMedia("(min-width: 1280px)").matches && {display: 'flex'}) }}>
        <ul className='list_log'>
          <NavLink to="*" className="nav_link_2">
            <li className='sign_up'>Sign up</li>
          </NavLink>
          <NavLink to="/dashboard" className="nav_link">
            <li className='login'>Login</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  </header>
);

};



export default Nav;

