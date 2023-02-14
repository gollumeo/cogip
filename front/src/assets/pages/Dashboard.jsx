import React, { useState, useEffect } from 'react';
import Dash from '../component/Dash';
import axios from 'axios';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('https://cogip.pierre-mauriello.be/verification_login.php')
            .then(response => setIsLoggedIn(response.data.isLoggedIn))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {isLoggedIn ? <Dash /> : 'Please log in'}
        </>
    );
};

export default Dashboard;