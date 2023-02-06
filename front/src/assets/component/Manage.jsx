import React from 'react';
import Homme_1 from '/src/assets/img/image_homme_1.png';
import "/src/assets/scss/Manage.css";


const Manage = () => {
    return (
        <section className='sect_manage'>
            <h2 className='manage'>MANAGE YOUR CUSTOMERS AND INVOICES EASLY</h2>
            <img src={Homme_1} alt="Homme" className='homme_1'/>
        </section>
    );
};

export default Manage;