<?php

namespace App\Services;

use App\Repositories\UsersRepository;

class UsersService
{
    private $usersRepository;

    public function __construct()
    {
        $this->usersRepository = new UsersRepository();
    }

    public function createUser($userData)
    {
        $this->usersRepository->create($userData);
        echo "User successfully created!";
    }

    public function updateUser($userData)
    {
        $this->usersRepository->updateUser($userData);
        echo "User successfully updated!";
    }

    public function deleteUser($userData)
    {
        $this->usersRepository->deleteUser($userData);
        echo "User successfully deleted!";
    }

    public function getAllUsers()
    {
        return $this->usersRepository->getAllUsers();
    }

    public function getUserById($userData)
    {
        return $this->usersRepository->getUserById($userData);
    }

    public function isLogged($mail, $password)
    {
        return $this->usersRepository->isLogged($mail, $password);
    }
}