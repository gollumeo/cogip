import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';
import '../scss/All_invoices.scss'
import { useEffect, useState } from 'react'

const All_invoices = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://cogip-api.pierre-mauriello.be/invoices")
            .then ((resp) => resp.json())
            .then ((apiData) => {
                setData(apiData);
            });
    }, 
    []);
    return (
        <section className='section_last_invoices'>
            <h3>All invoices</h3>
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
                        {
                            data.map((companie) => {
                                return( 
                                <tr>
                                    <th>{companie.id}</th>
                                    <th>{companie.company_id}</th>
                                    <th>{companie.created_at}</th>
                                    <th>{companie.updated_at}</th>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </section>
    );
}
export default All_invoices;