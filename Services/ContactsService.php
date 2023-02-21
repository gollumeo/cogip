<?php

namespace App\Services;

use App\Models\Contacts;
use App\Repositories\ContactsRepository;

class ContactsService
{
    private $contactsRepository;

    public function __construct()
    {
        $this->contactsRepository = new ContactsRepository();
    }

    public function createContacts(Contacts $contactsData)
    {
        return $this->contactsRepository->create($contactsData);
    }

    public function updateContacts(Contacts $contactsData)
    {
        return $this->contactsRepository->update($contactsData);
    }

    public function deleteContacts(Contacts $contactsData)
    {
        return $this->contactsRepository->delete($contactsData);
    }

    public function getAllContacts()
    {
        return $this->contactsRepository->getAllContacts();
    }

    public function getContactsById(Contacts $contactsData)
    {
        return $this->contactsRepository->getContactsById($contactsData);
    }
}