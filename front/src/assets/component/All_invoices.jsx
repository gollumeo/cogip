import React from 'react';
import '../scss/All_invoices.scss';
import useFetch from '../hook/useFetch';
import Pagination from './Pagination_invoices';

const All_invoices = () => {
    const {loading, error, data} = useFetch('https://cogip-api.pierre-mauriello.be/invoices')

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_invoices'>
            <h3 className='title_invoices'>All invoices</h3>
            <Pagination data={data}/>
        </section>
    );
}
export default All_invoices;