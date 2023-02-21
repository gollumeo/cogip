import React, { useState, useEffect } from 'react';
import line from "../img/line.svg"
import "../scss/InvoicesDash.scss";
import useFetch from '../hook/useFetch';

const Invoices = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/invoices");
    const {data: companies} = useFetch("https://cogip-api.pierre-mauriello.be/companies");

    const [invoiceCompanies, setInvoiceCompanies] = useState([]);

    useEffect(() => {
        if (data && companies) {
            const companiesById = companies.reduce((acc, company) => {
                acc[company.id] = company.name;
                return acc;
            }, {});
            const invoiceCompanies = data.map(invoice => ({
                id: invoice.id,
                createdAt: invoice.created_at,
                companyId: invoice.company_id,
                companyName: companiesById[invoice.company_id]
            }));
            setInvoiceCompanies(invoiceCompanies);
        }
    }, [data, companies]);

    if (loading) return <p>Loading</p>
    if (error) return <p>Unable to load</p>

    return (
        <div className='Tb_Invoices-section'>
                <h3>Last invoices</h3>
                <img src={line} className="line-h3tb"/>
                <section className='Tb_Invoices-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Invoice number</th>
                                <th>Dates</th>
                                <th>Company</th>
                            </tr> 
                        </thead>
                        <tbody>
                        {
                            invoiceCompanies.slice(Math.max(invoiceCompanies.length - 4, 0)).reverse().map((invoiceCompany) => {
                                return( 
                                <tr key={invoiceCompany.id}>
                                    <th className='invoice-number'>{invoiceCompany.id}</th>
                                    <th>{invoiceCompany.createdAt.split(" ")[0].split("-").reverse().join("-")}</th>
                                    <th>{invoiceCompany.companyName}</th>                                
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

export default Invoices;

/*import React from 'react';
import line from "/img/line.svg"
import "../scss/InvoicesDash.scss";
import useFetch from '../hook/useFetch';

const Invoices = () => {
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/invoices");

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>
    
    return (
        <div className='Tb_Invoices-section'>
                <h3>Last invoices</h3>
                <img src={line} className="line-h3tb"/>
                <section className='Tb_Invoices-table'>
                    <table>
                        <thead> 
                            <tr>
                                <th>Invoice number</th>
                                <th>Dates</th>
                                <th>Company</th>
                            </tr> 
                        </thead>
                        <tbody>
                        {
                            data.slice(Math.max(data.length - 4, 1)).reverse().map((companie) => {
                                return( 
                                <tr>
                                    <th className='invoice-number'>{companie.id}</th>
                                    <th>{companie.created_at.split(" ")[0].split("-").reverse().join("-")}</th>
                                    <th>{companie.name}</th>                                
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

export default Invoices;*/