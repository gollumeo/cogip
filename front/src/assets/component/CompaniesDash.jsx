import React from 'react';
import line from "/img/line.svg"
import "../scss/CompaniesDash.scss";
import useFetch from '../hook/useFetch';

const Companies = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/contacts","https://cogip-api.pierre-mauriello.be/invoices","https://cogip-api.pierre-mauriello.be/companies");

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <div className='Tb_Companies-section'>
                <h3>Last companies</h3>
                <img src={line} className="line-h3tb"/>
                <section className='Tb_Companies-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Name</th>
                                <th>TVA</th>
                                <th>Country</th>
                            </tr> 
                        </thead>
                        <tbody>
                        {
                            data.slice(Math.max(data.length - 4, 1)).reverse().map((companie) => {
                                return( 
                                <tr key={data}>
                                    <th className='name'>{companie.name}</th>
                                    <th >{companie.tva}</th>
                                    <th >{companie.country}</th>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </section>
        </div>
    );
};

export default Companies;