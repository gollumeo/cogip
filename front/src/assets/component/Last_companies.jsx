import React from 'react';
import "/src/assets/scss/Last_companies.css";

const Last_companies = () => {
    return (
        <section className='section_last_companies'>
            <h3>Last companies</h3>
            <section className='table_last_companies'>
                <table>
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>TVA</th>
                            <th>Country</th>
                            <th>Type</th>
                            <th>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <th>Raviga</th>
                            <th>US456 654 321</th>
                            <th>United States</th>
                            <th>Supplier</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Dunder Mifflin</th>
                            <th>US676 787 767</th>
                            <th>United States</th>
                            <th>Client</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Pierre Cailloux</th>
                            <th>FR 676 676 676</th>
                            <th>France</th>
                            <th>Supplier</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Belgalol</th>
                            <th>BE0987 876 787</th>
                            <th>Belgium</th>
                            <th>Supplier</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Jouet Jean-Michel</th>
                            <th>FR 787 776 999</th>
                            <th>France</th>
                            <th>Client</th>
                            <th>25/09/2020</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default Last_companies;