import React from 'react';
import "/src/assets/scss/Last_companies.css";
import useFetch from '../hook/useFetch';

const Last_companies = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/companies")

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_companies'>
            <h3>Last companies</h3>
            <section className='table_last_companies'>
                <table>
                    <thead> 
                        <tr>
                            <th className='table_last_companies_name'>Name</th>
                            <th className='table_last_companies_tva'>TVA</th>
                            <th className='table_last_companies_country'>Country</th>
                            <th className='table_last_companies_type'>Type</th>
                            <th className='table_last_companies_created'>Created at</th>
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
                                    <th>{companie.created_at.split(" ")[0].split("-").reverse().join("-")}</th>
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