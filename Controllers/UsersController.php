<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Models\Users;
use App\Repositories\UsersRepository;
use App\Services\UsersService;


class UsersController extends Controller
{
    //    private $invoicesRepository;
    private $usersService;
    /**
     * @var UsersRepository
     */
    private $usersRepository;

    public function __construct()
    {
        $this->usersRepository = new UsersRepository();
        $this->usersService = new UsersService();
    }

    public function createUser()
    {
        $companyId = $_POST['company_id'];
        $invoiceData = new Users($companyId);

        $invoiceData->setCreatedAt(date('Y-m-d H:i:s'));
        $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->usersService->createUser($invoiceData);
    }

    public function updateUser()
    {
        $company_id = $_POST['company_id'];
        $invoiceData = new Users($company_id);
        $invoiceData->setId($_POST['id']);
        $invoiceData->setCompanyId($_POST['company_id']);
        $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->usersService->updateUser($invoiceData);
    }

    public function deleteUser()
    {
        $invoiceData = new Users(new UsersService());

        $invoiceData->setId($_POST['id']);

        $this->usersService->deleteUser($invoiceData);
    }

    public function getAllUsers()
    {
        $allUsers = $this->usersService->getAllUsers();
        header('Content-Type: application/json');
        echo $allUsers;
    }

    public function getUserById()
    {
        $invoiceData = new Users();

        $invoiceData->setId($_GET['id']);

        $invoiceById = $this->usersService->getUserById($invoiceData);
        header('Content-Type: application/json');
        echo $invoiceById;
    }

    public function isLogged()
    {
        $mail = $_POST['mail'];
        $password = $_POST['password'];
        $isLogged = $this->usersService->isLogged($mail, $password);
        var_dump($isLogged);
        if ($isLogged != null) {
            header('Location: https://cogip.pierre-mauriello.be/dashboard');

        }
    }
}