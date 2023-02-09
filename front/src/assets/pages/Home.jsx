import React from 'react';
import Nav from '../../assets/component/Nav'; 
import Manage from '../../assets/component/Manage';
import Last_invoices from '../../assets/component/Last_invoices';
import Last_contacts from '../../assets/component/Last_contacts';
import Last_companies from '../../assets/component/Last_companies';
import Work from '../../assets/component/Work';
import Footer from '../../assets/component/Footer';

const Home = () => {
    return (
        <>
            <Nav />
            <Manage />
            <Last_invoices />
            <Last_contacts />
            <Last_companies />
            <Work />
            <Footer />
        </>
    );
};

export default Home;