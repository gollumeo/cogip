import React from 'react';
import Content from './Content';
import Menu from './Menu';
import "../scss/Dash.scss";

const Dash = () => {
    return (
        <div className='div-dash'>
            <Menu /><Content />
        </div>
    );
};

export default Dash;