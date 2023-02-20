//importer useState et useEffect de React. 
//useState est utilisé pour stocker le tableau des noms de société
//useEffect est utilisé pour effectuer la requête pour obtenir les noms de société et les stocker dans l'état.
import React, { useState, useEffect } from 'react';
import "/src/assets/scss/Last_invoices.css";
import black_notebook_and_green_arm from "/public/img/black notebook and green arm.png";
import useFetch from '../hook/useFetch';

const Last_invoices = () => {
    //La première requête est effectuée via le hook personnalisé useFetch qui renvoie un objet contenant trois propriétés : loading, error, et data. 
    //Ce hook est utilisé pour récupérer les dernières factures à partir de l'URL "https://cogip-api.pierre-mauriello.be/invoices".
    //La propriété loading indique si la requête est en cours, la propriété error indique s'il y a eu une erreur lors de la récupération des données, et la propriété data contient les données renvoyées par l'API.
    const {loading, error, data} = useFetch("https://cogip-api.pierre-mauriello.be/invoices")
    const [companyNames, setCompanyNames] = useState([]);

    useEffect(() => {
    //La deuxième requête est effectuée à l'aide d'un effet secondaire useEffect qui s'exécute une seule fois lors de la création du composant. 
    //Cette requête récupère les noms des entreprises à partir de l'URL "https://cogip-api.pierre-mauriello.be/companies". 
    //Cette requête récupère toutes les entreprises et stocke leur nom dans un tableau associatif companyNames à partir de leur ID.
        async function getCompanyNames() {
            const response = await fetch("https://cogip-api.pierre-mauriello.be/companies");
            const companies = await response.json();
            const names = companies.reduce((acc, company) => {
                acc[company.id] = company.name;
                return acc;
            }, {});
            setCompanyNames(names);
        }
        getCompanyNames();
    }, []);

    //Si les requêtes sont toujours en cours ou si companyNames est vide, le message "Loading" sera rendu à l'écran.
    //Si une erreur est survenue lors de la récupération des données, le message "Unable to load" sera affiché.
    if(loading || companyNames.length === 0) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    //Sinon, le composant renvoie une section contenant un tableau de factures triées par ordre décroissant de date de mise à jour (updated_at). 
    //Les 5 dernières factures sont affichées. 
    //Pour chaque facture, l'ID de la facture, la date de mise à jour, le nom de l'entreprise correspondante et la date de création de la facture sont affichés. 
    //Les noms d'entreprises sont obtenus à partir de l'ID de l'entreprise stocké dans chaque facture et en utilisant le tableau associatif companyNames créé précédemment.
    return (
        <section className='section_last_invoices'>
            <h3>Last invoices</h3>
            <section className='table_last_invoices'>
                <table>
                    <thead> 
                        <tr>
                            <th className='table_last_invoices_number'>Invoice number</th>
                            <th className='table_last_invoices_dates'>Date due</th>
                            <th className='table_last_invoices_company'>Company</th>
                            <th className='table_last_invoices_created'>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            data.slice(Math.max(data.length - 5, 1)).reverse().map((invoice) => {
                                return( 
                                    <tr key={invoice.id}>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.updated_at.split(" ")[0].split("-").reverse().join("-")}</td>
                                        <td>{companyNames[invoice.company_id]}</td>
                                        <td>{invoice.created_at.split(" ")[0].split("-").reverse().join("-")}</td>
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