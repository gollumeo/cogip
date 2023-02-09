import henry from '/public/img/Henry.png';
import dashboard from '/public/img/dashboard.png';
import invoices from '/public/img/invoices.png';
import companies from '/public/img/companies.png';
import contact from '/public/img/contact.png';
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
            <div className='div-logout-mobile'>Logout</div>
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
            <div className='div-logout-desktop'>Logout</div>  
        </div>
    );
};

export default Menu;