import React from 'react';
import '../scss/All_contacts.scss';
import useFetch from '../hook/useFetch';
import Pagination from './Pagination_contacts';

const All_contacts = () => {
    const {loading, error, data} = useFetch('https://cogip-api.pierre-mauriello.be/contacts')

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_invoices'>
            <h3 className='title_contacts'>All contacts</h3>
            <Pagination data={data}/>
        </section>
    );
};

export default All_contacts;