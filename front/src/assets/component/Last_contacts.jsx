import React from 'react';
import "/src/assets/scss/Last_contacts.css";

const Last_contacts = () => {
    return (
        <section className='section_last_contacts'>
            <h3>Last Contacts</h3>
            <section className='table_last_contacts'>
                <table>
                    <thead> 
                        <tr>
                            <th>IName</th>
                            <th>Phone</th>
                            <th>Mail</th>
                            <th>Company</th>
                            <th>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <th className='name'>Peter Gregory</th>
                            <th className='phone'>1555-8765</th>
                            <th className='mail'>peter.gregory@raviga.com</th>
                            <th className='company'>Raviga</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                        <tr>
                            <th className='name'>Peter Gregory</th>
                            <th className='phone'>1555-8765</th>
                            <th className='mail'>peter.gregory@raviga.com</th>
                            <th className='company'>Raviga</th>
                            <th className='created_at'>25/09/2020</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default Last_contacts;