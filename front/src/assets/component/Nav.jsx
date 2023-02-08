import React from 'react';
import "/src/assets/scss/Nav.css";
import BurgerMenu from '/public/img/burger_menu_icon.png';
import { useState } from 'react';

function Nav(){

  const [ isOpen, setIsOpen ] = useState(false);
  console.log(isOpen);

  // const showBurgerMenu = () => {
  //   setIsOpen(!isOpen)
  // };


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
          <li className='page'><a href="#">Home</a></li>
          <li className='page'><a href="#">Invoices</a></li>
          <li className='page'><a href="#">Companies</a></li>
          <li className='page'><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div className="nav_log" style={{ display: displayValue, ...(window.matchMedia("(min-width: 1280px)").matches && {display: 'flex'}) }}>
        <ul className='list_log'>
          <li className='sign_up'><a href="#">Sign up</a></li>
          <li className='login'><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

};



export default Nav;

