import React from 'react';
import "/src/assets/scss/Last_contacts.css";
import bulb from "/public/img/bulb.png";

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
                            <th>Peter Gregory</th>
                            <th>1555-8765</th>
                            <th>peter.gregory@raviga.com</th>
                            <th>Raviga</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Cameron How</th>
                            <th>555-8765</th>
                            <th>cam.how@mutiny.net</th>
                            <th>Mutiny</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Gavin Belson</th>
                            <th>555-6354</th>
                            <th>gavin@hooli.com</th>
                            <th>Hooli</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Jian Yang</th>
                            <th>555-8765</th>
                            <th>jian.yan@phoque.off</th>
                            <th>Phoque Off</th>
                            <th>25/09/2020</th>
                        </tr>
                        <tr>
                            <th>Bertram Gilfoyle</th>
                            <th>555-5434</th>
                            <th>gilfoy@piedpiper.com</th>
                            <th>Pied Pipper</th>
                            <th>25/09/2020</th>
                        </tr>
                    </tbody>
                </table>
            </section>
            <img src={bulb} alt="bulb" className='bulb' />
        </section>
    );
};

export default Last_contacts;