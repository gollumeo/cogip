<?php

namespace App\Routes;

use App\Controllers\CompaniesController;
use App\Controllers\InvoicesController;
use Bramus\Router\Router;

$router = new Router();

$invoicesController = new InvoicesController();

$router->get('/invoices', function () use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->getAllInvoices();
});

$router->get('/invoices/{id}', function ($id) use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->getInvoiceById($id);
});

$router->post('/invoices', function () use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->createInvoice();
});

$router->put('/invoices/{id}', function ($id) use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->updateInvoice($id);
});

$router->delete('/invoices/{id}', function ($id) use ($invoicesController) {
    header('Content-Type: application/json');
    echo $invoicesController->deleteInvoice($id);
});


///////////////////////////////////////////
////////// COMPANIES ////////////
///////////////////////////////////////////

$companiesController = new CompaniesController();

$router->get('/companies', function () use ($companiesController) {
    header('Content-Type: application/json');
    echo $companiesController->getAllCompanies();
});

$router->get('/companies/{id}', function ($id) use ($companiesController) {
    header('Content-Type: application/json');
    echo $companiesController->getCompaniesById($id);
});

$router->post('/companies', function () use ($companiesController) {
    header('Content-Type: application/json');
    echo $companiesController->createCompanies();
});

$router->put('/companies/{id}', function ($id) use ($companiesController) {
    header('Content-Type: application/json');
    echo $companiesController->updateCompanies($id);
});

$router->delete('/companies/{id}', function ($id) use ($companiesController) {
    header('Content-Type: application/json');
    echo $companiesController->deleteCompanies($id);
});

///////////////////////////////////////////
///////////// CONTACTS /////////////
///////////////////////////////////////////

$contactsController = new ContactsController();

$router->get('/contacts', function () use ($contactsController) {
    header('Content-Type: application/json');
    echo $contactsController->getAllContacts();
});

$router->get('/contacts/{id}', function ($id) use ($contactsController) {
    header('Content-Type: application/json');
    echo $contactsController->getContactsById($id);
});

$router->post('/contacts', function () use ($contactsController) {
    header('Content-Type: application/json');
    echo $contactsController->createContacts();
});

$router->put('/contacts/{id}', function ($id) use ($contactsController) {
    header('Content-Type: application/json');
    echo $contactsController->updateContacts($id);
});

$router->delete('/contacts/{id}', function ($id) use ($contactsController) {
    header('Content-Type: application/json');
    echo $contactsController->deleteContacts($id);
});


$router->run();