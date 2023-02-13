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
        if (!isset($_POST['name']) || !isset($_POST['company_id']) || !isset($_POST['email']) || !isset($_POST['phone'])) {
            header("HTTP/1.1 400 Bad Request");
            return;
        }

        $contactsData = new Contacts();

        $contactsData->setName(filter_var($_POST['name'], FILTER_SANITIZE_STRING));
        $contactsData->setCompanyId(filter_var($_POST['company_id'], FILTER_SANITIZE_STRING));
        $contactsData->setEmail(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL));
        $contactsData->setPhone(filter_var($_POST['phone'], FILTER_SANITIZE_STRING));
        $contactsData->setCreatedAt(date('Y-m-d H:i:s'));
        $contactsData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->contactsService->createContacts($contactsData);

        header("HTTP/1.1 201 Created");
        echo "Contact successfully created!";
    }

    public function updateContacts()
    {
        if (!isset($_POST['id']) || !isset($_POST['name']) || !isset($_POST['company_id']) || !isset($_POST['email']) || !isset($_POST['phone'])) {
            header("HTTP/1.1 400 Bad Request");
            return;
        }

        $contactsData = new Contacts();

        $contactsData->setId(filter_var($_POST['id'], FILTER_SANITIZE_STRING));
        $contactsData->setName(filter_var($_POST['name'], FILTER_SANITIZE_STRING));
        $contactsData->setCompanyId(filter_var($_POST['company_id'], FILTER_SANITIZE_STRING));
        $contactsData->setEmail(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL));
        $contactsData->setPhone(filter_var($_POST['phone'], FILTER_SANITIZE_STRING));
        $contactsData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->contactsService->updateContacts($contactsData);

        header("HTTP/1.1 200 OK");
        echo "Contact successfully updated!";
    }

    public function deleteContacts(Request $request)
    {
        $id = $request->get('id');

        if (!$id) {
            return response()->json(['error' => 'Missing required parameter: id'], 400);
        }

        $this->contactsService->deleteContacts($id);

        return response()->json(['message' => 'Contact successfully deleted!'], 200);
    }


    public function getAllContacts()
    {
        $allContacts = $this->contactsService->getAllContacts();
        header('Content-Type: application/json');
        echo json_encode($allContacts);
    }


    public function getContactsById()
    {
        $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid contact ID"]);
            return;
        }

        $contacts = $this->contactsService->getContactsById($id);
        if (!$contacts) {
            http_response_code(404);
            echo json_encode(["error" => "Contact not found"]);
            return;
        }

        header('Content-Type: application/json');
        echo json_encode($contacts);
    }
}
