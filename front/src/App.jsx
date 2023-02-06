import React from 'react';
import Nav from './assets/component/Nav'
import Manage from './assets/component/Manage'
import Last_invoices from './assets/component/Last_invoices'
import Last_contacts from './assets/component/Last_contacts'

const App = () => {
    return (
        <>
            <Nav />
            <Manage />
            <Last_invoices />
            <Last_contacts />
        </>
    );
};

export default App;