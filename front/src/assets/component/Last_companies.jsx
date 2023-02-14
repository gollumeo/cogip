import React from 'react';
import "/src/assets/scss/Last_companies.css";
import { useEffect, useState } from 'react'
import useFetch from '../hook/useFetch';

const Last_companies = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/invoices")

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>
    console.log(data);

    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch("https://cogip-api.pierre-mauriello.be/companies")
    //         .then ((resp) => resp.json())
    //         .then ((apiData) => {
    //             setData(apiData);
    //         });
    // }, 
    // []);
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
                                <tr key={data}>
                                    <th>{companie.name}</th>
                                    <th>{companie.tva}</th>
                                    <th>{companie.country}</th>
                                    <th>{companie.type_id}</th>
                                    <th>{companie.created_at}</th>
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