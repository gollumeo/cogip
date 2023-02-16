import React from 'react';
import "/src/assets/scss/Last_contacts.css";
import bulb from "/public/img/bulb.png";
import { useEffect, useState } from 'react'

const Last_contacts = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://cogip-api.pierre-mauriello.be/contacts")
            .then ((resp) => resp.json())
            .then ((apiData) => {
                setData(apiData);
            });
    }, 
    []);
    return (
        <section className='section_last_contacts'>
            <h3>Last Contacts</h3>
            <section className='table_last_contacts'>
                <table>
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Mail</th>
                            <th>Company</th>
                            <th>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            data.slice(Math.max(data.length - 5, 1)).reverse().map((companie) => {
                                return( 
                                <tr>
                                    <th>{companie.id}</th>
                                    <th>{companie.name}</th>
                                    <th>{companie.phone}</th>
                                    <th>{companie.email}</th>
                                    <th>{companie.company_id}</th>
                                    <th>{companie.created_at}</th>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
            <img src={bulb} alt="bulb" className='bulb' />
        </section>
    );
};

export default Last_contacts;