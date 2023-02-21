//Importer le hook useState et useEffect de React (pour la requête http)
import React, { useState, useEffect } from 'react';
import "../scss/StatsDash.scss";

const Stats = () => {

    /*Créer un état local pour stocker le nombre total de contacts en utilisant useState*/
    const [nbContacts, setNbContacts] = useState(0);
    const [nbInvoices, setNbInvoices] = useState(0);
    const [nbCompanies, setNbCompanies] = useState(0);
    
    //Utiliser useEffect pour exécuter une requête HTTP à l'API et mettre à jour l'état local avec le nombre total de contacts, invoices et companies
    useEffect(() => {
        
        // Requête pour récupérer le nombre total de contacts
        fetch('https://cogip-api.pierre-mauriello.be/contacts')
            .then(response => response.json())
            .then(data => {
                setNbContacts(data.length);
            })
            .catch(error => console.log(error));

        // Requête pour récupérer le nombre total d'invoices
        fetch('https://cogip-api.pierre-mauriello.be/invoices')
            .then(response => response.json())
            .then(data => {
                setNbInvoices(data.length);
            })
            .catch(error => console.log(error));

        // Requête pour récupérer le nombre total de companies
        fetch('https://cogip-api.pierre-mauriello.be/companies')
            .then(response => response.json())
            .then(data => {
                setNbCompanies(data.length);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="div-stat">
            <h2 className="h2-stat">Statistics</h2>
            <div className="div-invoices">
                <p className="invoices-stat">{nbInvoices} <br /> invoices</p>
            </div>
            <div className="div-contacts">
                <p className="contacts-stat">{nbContacts} <br /> contacts</p>
            </div>
            <div className="div-companies">
                <p className="companies-stat">{nbCompanies} <br /> companies</p>
            </div>
        </div>
    );
};

export default Stats;