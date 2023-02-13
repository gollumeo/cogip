import React from 'react';
import '../scss/All_invoices.scss';
import useFetch from '../hook/useFetch';
import Pagination from './Pagination';

const All_invoices = () => {
    const {loading, error, data} = useFetch('https://cogip-api.pierre-mauriello.be/invoices')

    if(loading) return <p>Loading of articles</p>
    if(error) return <p>Unable to load articles</p>

    return (
        <section className='section_last_invoices'>
            <h3>All invoices</h3>
            <hr className='yellow_rectangle'/>
            <input type="text" placeholder='Search invoice' className='input_text'/>
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
                    <Pagination data={data}/>
                        {/* {
                            data.map((companie) => {
                                return( 
                                <tr key={companie.id}>
                                    <th>{companie.id}</th>
                                    <th>{companie.company_id}</th>
                                    <th>{companie.created_at}</th>
                                    <th>{companie.updated_at}</th>
                                </tr>
                                )
                            })
                        } */}
                    </tbody>
                </table>
                
            </section>
        </section>
    );
}
export default All_invoices;