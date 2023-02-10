import React from 'react';
import line from "/img/line.svg"
import "../scss/Data.scss";

const Data = () => {
    const nbInvoices = 245;
    const nbContacts = 245;
    const nbCompanies = 245;
    return (
        <div className='div-content'>
            <div className="div-stat">
                <h2 className="h2-stat">Statistics</h2>
                <div className="div-invoices">
                    <p className="invoices-stat">{nbInvoices} invoices</p>
                </div>
                <div className="div-contacts">
                    <p className="contacts-stat">{nbContacts} contacts</p>
                </div>
                <div className="div-companies">
                    <p className="companies-stat">{nbCompanies} companies</p>
                </div>
            </div>
            <section className='Tb_Contacts-section'>
                <h3>Last contacts</h3>
                <img src={line} className="line-h3tb"/>
                 <section className='Tb_Contacts-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <th className='name'>Peter Gregory</th>
                                <th className='phone'>555-4567</th>
                                <th className='email'>peter.gregory@raviga.com</th>
                            </tr>
                            <tr>
                                <th className='name'>Cameron How</th>
                                <th className='phone'>555-8765</th>
                                <th className='email'>cam.how@mutiny.net</th>
                            </tr>
                            <tr>
                                <th className='name'>Gavin Belson</th>
                                <th className='phone'>555-6354</th>
                                <th className='email'>gavin@hooli.com</th>
                            </tr>
                            <tr>
                                <th className='name'>Jian Yang</th>
                                <th className='phone'>555-5434</th>
                                <th className='email'> jian.yan@phoque.off</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <section className='Tb_Invoices-section'>
                <h3>Last invoices</h3>
                <img src={line} className="line-h3tb"/>
                <section className='Tb_Invoices-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Invoice number</th>
                                <th>Dates</th>
                                <th>Company</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <th className='invoice-number'>F20220915-001</th>
                                <th className='dates-due'>15/09/2022</th>
                                <th className='company'>Jouet Jean-Michel</th>
                            </tr>
                            <tr>
                                <th className='invoice-number'>F20220915-002</th>
                                <th className='dates-due'>15/09/2022</th>
                                <th className='company'>Dunder Mifflin</th>
                            </tr>
                            <tr>
                                <th className='invoice-number'>F20220915-003</th>
                                <th className='dates-due'>15/09/2022</th>
                                <th className='company'>Pierre Cailloux</th>
                            </tr>
                            <tr>
                                <th className='invoice-number'>F20220915-004</th>
                                <th className='dates-due'>15/09/2022</th>
                                <th className='company'>Pier Pipper</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <section className='Tb_Companies-section'>
                <h3>Last companies</h3>
                <img src={line} className="line-h3tb"/>
                <section className='Tb_Companies-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Name</th>
                                <th>TVA</th>
                                <th>Country</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <th className='name'>Raviga</th>
                                <th className='tva'>US456 654 321</th>
                                <th className='country'>United States</th>
                            </tr>
                            <tr>
                                <th className='name'>Raviga</th>
                                <th className='tva'>US676 787 767</th>
                                <th className='country'>United States</th>
                            </tr>
                            <tr>
                                <th className='name'>Pierre Cailloux</th>
                                <th className='tva'>FR 676 676 676</th>
                                <th className='country'>France</th>
                            </tr>
                            <tr>
                                <th className='name'>Belgalol</th>
                                <th className='tva'>BE0987 876 787</th>
                                <th className='country'>Belgium</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </div>
    );
};

export default Data;