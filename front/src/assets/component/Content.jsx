//import illustr from '/public/img/illustr.png';
import "../scss/Content.scss";
import React from 'react';
//<img className="illustr-welcome" src={illustr} alt="illustration" />

const Content = () => {
        const title = "Dashboard";
        const folder = "dashboard/";
    return (
        <div className='div-content'>
            <div className='div-header'>
                <h1 className="title-header">{title}</h1>
                <p className='folder-header'>{folder}</p>
            </div>
            <div className="div-welcome">
                
                <h1 className="h1-welcome">Welcome back Henry !</h1>
                <p className="p-welcome">You can here add an invoice, a company and some contacts</p>
            </div>
        </div>
    );
};

export default Content;