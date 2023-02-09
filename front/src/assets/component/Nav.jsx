import React from 'react';
import "/src/assets/scss/Nav.css";
import BurgerMenu from '/public/img/burger_menu_icon.png';

const Nav = () => {
  return (
    <header>
      <h1>COGIP</h1>
      <nav className='nav_pages'>
        <ul className='list_pages'>
          <li className='page'><a href="#">Home</a></li>
          <li className='page'><a href="#">Invoices</a></li>
          <li className='page'><a href="#">Companies</a></li>
          <li className='page'><a href="#">Contacts</a></li>
        </ul>
      </nav>
      <nav className='nav_log'>
        <ul className='list_log'>
          <li className='sign_up'><a href="#">Sign up</a></li>
          <li className='login'><a href="#">Login</a></li>
        </ul>
      </nav>
      <button><img src={BurgerMenu} alt="BurgerMenu" className='burger_menu'/></button>
    </header>
  );
};

export default Nav;

