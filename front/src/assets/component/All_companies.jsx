import React from 'react';
import '../scss/All_companies.scss';
import { useEffect, useState } from 'react'

const All_contacts = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://cogip-api.pierre-mauriello.be/companies")
            .then ((resp) => resp.json())
            .then ((apiData) => {
                setData(apiData);
            });
    }, 
    []);
    return (
        <section className='section_last_invoices'>
            <h3>All companies</h3>
            <hr className='yellow_rectangle_3'/>
            <input type="text" placeholder='Search company' className='input_text'/>
            <section className='table_last_invoices'>
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
                        {
                            data.map((companie) => {
                                return( 
                                <tr>
                                    <th>{companie.name}</th>
                                    <th>{companie.tva}</th>
                                    <th>{companie.country}</th>
                                    <th>{companie.type_id}</th>
                                    <th>{companie.created_at}</th>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default All_contacts;