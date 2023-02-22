import React from 'react';
import "../scss/Data.scss";
import Stats from './StatsDash';
import Contacts from './ContactsDash';
import Invoices from './InvoicesDash';
import Companies from './CompaniesDash';

const Data = () => {

    return (
        <div className='div-data'>
            <Stats /><Contacts /><Invoices /><Companies />
        </div>
    );
};

export default Data;