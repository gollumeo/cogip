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
                            <th>F20220915-001</th>
                            <th>15/09/2022</th>
                            <th>Jouet Jean-Michel</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>F20220915-002</th>
                            <th>15/09/2022</th>
                            <th>Dunder Mifflin</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>F20220915-003</th>
                            <th>15/09/2022</th>
                            <th>Pierre Cailloux</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>F20220915-004</th>
                            <th>15/09/2022</th>
                            <th>Pier Pipper</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>F20220915-005</th>
                            <th>15/09/2022</th>
                            <th>Raviga</th>
                            <th>25/09/2020</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default Last_invoices;