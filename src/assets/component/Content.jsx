import React from 'react';
import "../scss/Content.scss";
import Top from './Top';
import Data from './Data';

const Content = () => {
    return (
        <div className='div-content'>
            <Top /><Data />
        </div>
    );
};

export default Content;