import React from 'react';
import line from "..//img/line.svg"
import "../scss/ContactsDash.scss";
import useFetch from '../hook/useFetch';

const Contacts = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/contacts");

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>
    return (
        <div className='Tb_Contacts-section'>
                <h3>Last contacts</h3>
                <img src={line} className="line-h3tb"/>
                 <section className='Tb_Contacts-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr> 
                        </thead>
                        <tbody>
                        {data
                            .slice(Math.max(data.length - 4, 1))
                            .reverse()
                            .map((companie) => {
                                return( 
                                    <tr>
                                    <th className='name'>{companie.name}</th>
                                    <th className='phone'>{companie.phone}</th>
                                    <th className='email'>{companie.email}</th>
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

export default Contacts;