<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\InvoicesController;

$router = new Router();

$invoicesController = new InvoicesController();

$router->get('/invoices', function() use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->getAllInvoices();
});

$router->get('/invoices/{id}', function($id) use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->getInvoiceById($id);
});

$router->post('/invoices', function() use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->createInvoice();
});

$router->put('/invoices/{id}', function($id) use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->updateInvoice($id);
});

$router->delete('/invoices/{id}', function($id) use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->deleteInvoice($id);
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