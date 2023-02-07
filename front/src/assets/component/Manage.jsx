import React from 'react';
import Homme_1 from '/public/img/image_homme_1.png';
import "/src/assets/scss/Manage.css";
import white_shape from "/public/img/Rectangle 10.png";


const Manage = () => {
    return (
        <section className='sect_manage'>
            <div className='txt_img'>
                <h2 className='manage'>MANAGE YOUR CUSTOMERS AND INVOICES EASLY</h2>
                <img src={Homme_1} alt="Homme" className='homme_1'/>
            </div>
            <img src={white_shape} alt="white shape" className='white_shape' />
        </section>
    );
};

export default Manage;