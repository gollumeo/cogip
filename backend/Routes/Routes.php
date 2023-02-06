<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;

$router = new Router();

///////////////////////////////////////////
////////////// INVOICES /////////////
///////////////////////////////////////////

// GET endpoint for retrieving all invoices
$router->get('/invoices', function() {
    // code to retrieve all invoices from the database
    // return the invoices in JSON format
});

// GET endpoint for retrieving a specific invoice
$router->get('/invoices/{id}', function($id) {
    // code to retrieve a specific invoice from the database using the id parameter
    // return the invoice in JSON format
});

// POST endpoint for creating a new invoice
$router->post('/invoices', function() {
    // code to process the incoming data and create a new invoice in the database
    // return a success message in JSON format
});

// PUT endpoint for updating an existing invoice
$router->put('/invoices/{id}', function($id) {
    // code to process the incoming data and update an existing invoice in the database using the id parameter
    // return a success message in JSON format
});

// DELETE endpoint for deleting an invoice
$router->delete('/invoices/{id}', function($id) {
    // code to delete an existing invoice from the database using the id parameter
    // return a success message in JSON format
});

///////////////////////////////////////////
////////// COMPANIES ////////////
///////////////////////////////////////////

// GET endpoint for retrieving all companies
$router->get('/companies', function() {
    // code to retrieve all companies from the database
    // return the companies in JSON format
});

// GET endpoint for retrieving a specific company
$router->get('/companies/{id}', function($id) {
    // code to retrieve a specific company from the database using the id parameter
    // return the company in JSON format
});

// POST endpoint for creating a new company
$router->post('/companies', function() {
    // code to process the incoming data and create a new company in the database
    // return a success message in JSON format
});

// PUT endpoint for updating an existing company
$router->put('/companies/{id}', function($id) {
    // code to process the incoming data and update an existing company in the database using the id parameter
    // return a success message in JSON format
});

// DELETE endpoint for deleting a company
$router->delete('/companies/{id}', function($id) {
    // code to delete an existing company from the database using the id parameter
    // return a success message in JSON format
});

///////////////////////////////////////////
///////////// CONTACTS /////////////
///////////////////////////////////////////

// GET endpoint for retrieving all contacts
$router->get('/contacts', function() {
    // code to retrieve all contacts from the database
    // return the contacts in JSON format
});

// GET endpoint for retrieving a specific contact
$router->get('/contacts/{id}', function($id) {
    // code to retrieve a specific contact from the database using the id parameter
    // return the contact in JSON format
});

// POST endpoint for creating a new contact
$router->post('/contacts', function() {
    // code to process the incoming data and create a new contact in the database
    // return a success message in JSON format
});

// PUT endpoint for updating an existing contact
$router->put('/contacts/{id}', function($id) {
    // code to process the incoming data and update an existing contact in the database using the id parameter
    // return a success message in JSON format
});

// DELETE endpoint for deleting a contact
$router->delete('/contacts/{id}', function($id) {
    // code to delete an existing contact from the database using the id parameter
    // return a success message in JSON format
});


$router->run();