import React from 'react';
import "/src/assets/scss/Last_invoices.css";
import black_notebook_and_green_arm from "/public/img/black notebook and green arm.png";
import useFetch from '../hook/useFetch';

const Last_invoices = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/invoices")

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_invoices'>
            <h3>Last invoices</h3>
            <section className='table_last_invoices'>
                <table>
                    <thead> 
                        <tr>
                            <th className='table_last_invoices_number'>Invoice number</th>
                            <th className='table_last_invoices_dates'>Dates due</th>
                            <th className='table_last_invoices_company'>Company</th>
                            <th className='table_last_invoices_created'>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            data.slice(Math.max(data.length - 5, 1)).reverse().map((companie) => {
                                return( 
                                <tr>
                                    <th>{companie.id}</th>
                                    <th>{companie.company_id}</th>
                                    <th>{companie.created_at.split(" ")[0].split("-").reverse().join("-")}</th>
                                    <th>{companie.updated_at.split(" ")[0].split("-").reverse().join("-")}</th>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
            <img src={black_notebook_and_green_arm} alt="black_notebook_and_green_arm" className='green_arm'/>
        </section>
    );
};

export default Last_invoices;