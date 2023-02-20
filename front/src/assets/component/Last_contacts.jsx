import React from 'react';
import "../scss/Last_contacts.scss";
import bulb from "../../../public/img/bulb.png";
import useFetch from '../hook/useFetch';

const Last_contacts = () => {
    
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/contacts")

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_contacts'>
            <h3>Last Contacts</h3>
            <section className='table_last_contacts'>
                <table>
                    <thead> 
                        <tr>
                            <th className='table_last_contacts_name'>Name</th>
                            <th className='table_last_contacts_phone'>Phone</th>
                            <th className='table_last_contacts_mail'>Mail</th>
                            <th className='table_last_contacts_company'>Company</th>
                            <th className='table_last_contacts_created'>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            data.slice(Math.max(data.length - 5, 1)).reverse().map((companie) => {
                                return( 
                                <tr>
                                    <th>{companie.name}</th>
                                    <th>{companie.phone}</th>
                                    <th>{companie.email}</th>
                                    <th>{companie.company_id}</th>
                                    <th>{companie.created_at.split(" ")[0].split("-").reverse().join("-")}</th>
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