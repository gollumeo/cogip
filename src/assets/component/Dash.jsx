import React from 'react';
import Menu from './Menu';
import Content from './Content';
import "../scss/Dash.scss";

const Dash = () => {
    return (
        <div className='div-dash'>
            <Menu /><Content />
        </div>
    );
};

export default Dash;