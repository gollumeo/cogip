import React from 'react';
import "/src/assets/scss/Last_companies.css";
import { useEffect, useState } from 'react'

const Last_companies = () => {
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
                        {
                            data.slice(Math.max(data.length - 5, 1)).reverse().map((companie) => {
                                return( 
                                <tr>
                                    <th>{companie.id}</th>
                                    <th>{companie.company_id}</th>
                                    <th>{companie.created_at}</th>
                                    <th>{companie.updated_at}</th>
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
};

export default Last_companies;