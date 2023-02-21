<?php

namespace App\Routes;
use App\Controllers\CompaniesController;
use App\Controllers\ContactsController;
use App\Controllers\InvoicesController;
use App\Controllers\UsersController;
use Bramus\Router\Router;

if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE, PATCH, HEAD");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }
    exit(0);
}

$router = new Router();


$router->get('/invoices', function () {

    return (new InvoicesController())->getAllInvoices();
});

$router->get('/invoices/{id}', function ($id) {

    return  (new InvoicesController())->getInvoiceById($id);
});

$router->post('/invoices', function () {
     (new InvoicesController())->createInvoice();
});

$router->put('/invoices/{id}', function ($id) {
    (new InvoicesController())->updateInvoice($id);
});

$router->delete('/invoices/{id}', function ($id) {
    (new InvoicesController())->deleteInvoice($id);
});


///////////////////////////////////////////
////////// COMPANIES ////////////
///////////////////////////////////////////

$companiesController = new CompaniesController();

$router->get('/companies', function () {
    return (new CompaniesController())->getAllCompanies();
});

$router->get('/companies/{id}', function ($id) {
    header('Content-Type: application/json');
    return (new CompaniesController())->getCompaniesById($id);
});

$router->post('/companies', function () {
    (new CompaniesController())->createCompanies();
});

$router->put('/companies/{id}', function ($id) {
    (new CompaniesController())->updateCompanies($id);
});

$router->delete('/companies/{id}', function ($id) {
    (new CompaniesController())->deleteCompanies($id);
});

///////////////////////////////////////////
///////////// CONTACTS /////////////
///////////////////////////////////////////

$contactsController = new ContactsController();

$router->get('/contacts', function () {
    return (new ContactsController())->getAllContacts();
});

$router->get('/contacts/{id}', function ($id) {
    return (new ContactsController())->getContactsById($id);
});

$router->post('/contacts', function () {
    (new ContactsController())->createContacts();
});

$router->put('/contacts/{id}', function ($id) {
    (new ContactsController())->updateContacts($id);
});

$router->delete('/contacts/{id}', function ($id) {
    (new ContactsController())->deleteContacts($id);
});

///////////////////////////////////////////
/////////////////// USERS /////////////////
///////////////////////////////////////////

$router->get('/users', function () {
    return (new UsersController())->getAllUsers();
});

$router->get('/users/{id}', function ($id) {
    return (new UsersController())->getUserById($id);
});

$router->post('/users', function () {
    (new UsersController())->createUser();
});

$router->put('/users/{id}', function ($id) {
    (new UsersController())->updateUser($id);
});

$router->delete('/users/{id}', function ($id) {
    (new UsersController())->deleteUser($id);
});

$router->post('/isLogged', function () {
    return (new UsersController())->isLogged();
});

$router->run();