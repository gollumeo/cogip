import React from 'react';
import Nav from '../component/Nav';
import Manage from '../component/Manage';
import Last_invoices from '../component/Last_invoices';
import Last_contacts from '../component/Last_contacts';
import Last_companies from '../component/Last_companies';
import Work from '../component/Work';
import Footer from '../component/Footer';

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