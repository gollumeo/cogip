import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Invoices from './assets/pages/Invoices';
import Companies from './assets/pages/Companies';
import Contacts from './assets/pages/Contacts';
import Dashboard from './assets/pages/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/companies' element={<Companies />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;