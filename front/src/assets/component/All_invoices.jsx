import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import '../scss/All_invoices.scss'
import yellow_rectangle from '/public/img/Rectangle 19.svg'

const All_invoices = () => {
    return (
        <section className='section_last_invoices'>
            <h3>All invoices</h3>
            {/* <img src={yellow_rectangle} alt="yellow_rectangle" className='yellow_rectangle'/> */}
            <hr className='yellow_rectangle'/>
            <input type="text" placeholder='Search company' className='input_text'/>
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

export default All_invoices;