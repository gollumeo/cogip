import React from 'react';
import "/src/assets/scss/Last_invoices.css";

const Last_invoices = () => {
    return (
        <section className='section_last_invoices'>
            <h3>Last invoices</h3>
            <section className='table_last_invoices'>
                <table>
                    <thead> 
                        <tr>
                            <th>Invoice number</th>
                            <th>Dates due</th>
                            <th>Company</th>
                            <th>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <th className='invoice_number'>F20220915-001</th>
                            <th className='dates_due'>15/09/2022</th>
                            <th className='company'>Jouet Jean-Michel</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                        <tr>
                            <th className='invoice_number'>F20220915-002</th>
                            <th className='dates_due'>15/09/2022</th>
                            <th className='company'>Dunder Mifflin</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                        <tr>
                            <th className='invoice_number'>F20220915-003</th>
                            <th className='dates_due'>15/09/2022</th>
                            <th className='company'>Pierre Cailloux</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                        <tr>
                            <th className='invoice_number'>F20220915-004</th>
                            <th className='dates_due'>15/09/2022</th>
                            <th className='company'>Pier Pipper</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                        <tr>
                            <th className='invoice_number'>F20220915-005</th>
                            <th className='dates_due'>15/09/2022</th>
                            <th className='company'>Raviga</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default Last_invoices;