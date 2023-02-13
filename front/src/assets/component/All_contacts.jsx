import React from 'react';
import '../scss/All_contacts.scss';
import useFetch from '../hook/useFetch';
import Pagination from './Pagination_invoices';

const All_contacts = () => {
    const {loading, error, data} = useFetch('https://cogip-api.pierre-mauriello.be/invoices')

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_invoices'>
            <h3>All contacts</h3>
            <hr className='yellow_rectangle_2'/>
            <input type="text" placeholder='Search company' className='input_text'/>
            <Pagination data={data}/>
        </section>
    );
};

export default All_contacts;