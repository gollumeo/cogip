<?php

namespace App\Controllers;

use App\Models\Contacts;
use App\Repositories\ContactsRepository;
use App\Services\ContactsService;


class ContactsController
{
    private $contactsService;

    public function __construct()
    {
        $this->contactsRepository = new ContactsRepository();
        $this->contactsService = new ContactsService();
    }

    public function createContacts()
    {
        $contactsData = new Contacts();

        $contactsData->setName($_POST['name']);
        $contactsData->setCompanyId($_POST['company_id']);
        $contactsData->setEmail($_POST['email']);
        $contactsData->setPhone($_POST['phone']);
        $contactsData->setCreatedAt(date('Y-m-d H:i:s'));
        $contactsData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->contactsService->createCompanies($contactsData);

        echo "Contact successfully created!";
    }

    public function updateContacts()
    {
        $contactsData = new Contacts();

        $contactsData->setName($_POST['name']);
        $contactsData->setCompanyId($_POST['company_id']);
        $contactsData->setEmail($_POST['email']);
        $contactsData->setPhone($_POST['phone']);
        $contactsData->setCreatedAt(date('Y-m-d H:i:s'));
        $contactsData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->contactsService->createCompanies($contactsData);

        echo "Contact successfully updated!";

    }

    public function deleteContacts()
    {
        $contactsData = new Contacts();

        $contactsData->setId($_POST['id']);

        $this->contactsService->deleteContacts($contactsData);

        echo "Contact successfully created!";

    }

    public function getAllContacts()
    {
        $allContacts = $this->contactsService->getAllContacts();
        header('Content-Type: application/json');
        echo $allContacts;
    }

    public function getContactsByid()
    {
        $contactsData = new Contacts();

        $contactsData->setId($_GET['id']);

        $contactsByid = $this->contactsService->getContactsById($contactsData);
        header('Content-Type: application/json');
        echo $contactsByid;
    }
}