import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './assets/component/Nav'
import Manage from './assets/component/Manage'
import Last_invoices from './assets/component/Last_invoices'
import Last_contacts from './assets/component/Last_contacts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Manage />
    <Last_invoices />
    <Last_contacts />
  </React.StrictMode>,
)
