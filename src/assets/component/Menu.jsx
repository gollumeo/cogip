import henry from '/img/Henry.png';
import dashboard from '/img/dashboard.png';
import invoices from '/img/invoices.png';
import companies from '/img/companies.png';
import contact from '/img/contact.png';
import separation from '/img/Separation.png';
import "../scss/Menu.scss";
import React from 'react';

const Menu = () => {
    const user = "Henry George"
    return (
        <div className='div-menu'>
            <div className='div-user'>
                <img src={henry} className="user-img"/>
                <p className='user-name'>{user}</p>
            </div>
            <img src={separation} className="separation1-img"/>
            <div className='div-logout-mobile'>Logout</div>
            <img src={separation} className="separation2-img"/>
            <div className='div-nav'>
                <div className='div-dashboard'>
                    <img src={dashboard} className="dashboard-img"/>
                    <p className='dashboard-clic'>Dashboard</p>
                </div>
                <div className='div-invoices'>
                    <img src={invoices} className="invoices-img"/>
                    <p className='invoices-clic'>Invoices</p>
                </div>
                <div className='div-companies'>
                    <img src={companies} className="companies-img"/>
                    <p className='companies-clic'>Companies</p>
                </div>
                <div className='div-contact'>
                    <img src={contact} className="contact-img"/>
                    <p className='contact-clic'>Contact</p>
                </div>
            </div>
            <img src={separation} className="separation3-img"/>
            <div className='div-logout-desktop'>  
                <img src={henry} className="user-imgSmall"/>
                <p>Logout</p>
            </div>
        </div>
    );
};

export default Menu;