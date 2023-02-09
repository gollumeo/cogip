import React from 'react';
import All_contacts from '../component/All_contacts';
import Nav from '../component/Nav'
import Footer from '../component/Footer'

const Contacts = () => {
    return (
        <div>
            <Nav />
            <All_contacts />
            <Footer />
        </div>
    );
};

export default Contacts;