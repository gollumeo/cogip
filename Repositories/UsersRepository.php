<?php

namespace App\Repositories;

use App\Models\Users;
use App\Core\Database;
use PDO;

class UsersRepository
{
    private $database;

    public function __construct()
    {
        $this->database = Database::getInstance()->getConnection();
    }

    public function create(Users $userData): bool|string
    {
        // Select the correct DB, otherwise MySQL cries.
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();

        // Prepare the actual query
        $stmt = $this->database->prepare("INSERT INTO users (first_name, last_name, email, password, created_at) VALUES (?, ?, ?, ?, ?)");
        $stmt->bindParam(1, $userData->getFirstName());
        $stmt->bindParam(2, $userData->getLastName());
        $stmt->bindParam(3, $userData->getEmail());
        $stmt->bindParam(4, $userData->getPassword());
        $stmt->bindParam(5, $userData->getCreatedAt());

        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'User successfully created!'], true);

        return $json_encode;
    }

    public function updateUser(Users $userData)
    {
        // Select the correct DB, otherwise MySQL cries.
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();

        // Prepare the actual query
        $stmt = $this->database->prepare("UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, updated_at = ? WHERE id = ?");
        $stmt->bindParam(1, $userData->getFirstName());
        $stmt->bindParam(2, $userData->getLastName());
        $stmt->bindParam(3, $userData->getEmail());
        $stmt->bindParam(4, $userData->getPassword());
        $stmt->bindParam(5, $userData->getUpdatedAt());
        $stmt->bindParam(6, $userData->getId());

        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'User successfully created!'], true);

        return $json_encode;
    }

    public function deleteUser(Users $userData)
    {
        // Select the correct DB, otherwise MySQL cries.
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();

        // Prepare the actual query
        $stmt = $this->database->prepare("DELETE FROM users WHERE id = ?");
        $stmt->bindParam(1, $userData->getId());

        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'User successfully created!'], true);

        return $json_encode;
    }

    public function getAllUsers()
    {
        // Select the correct DB, otherwise MySQL cries.
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();

        // Prepare the actual query
        $stmt = $this->database->prepare("SELECT * FROM users");

        $stmt->execute();

        $userData = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $json = json_encode($userData, JSON_PRETTY_PRINT);

        header('Content-Type: application/json');
        return $json;
    }

    public function getUserById(Users $userData)
    {
        // Select the correct DB, otherwise MySQL cries.
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();

        // Prepare the actual query
        $stmt = $this->database->prepare("SELECT * FROM users WHERE id = ?");
        $id = $userData->getId();
        $stmt->bindParam(1, $id);

        $stmt->execute();

        $userData = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $json = json_encode($userData, JSON_PRETTY_PRINT);

        header('Content-Type: application/json');
        return $json;
    }

    public function isLogged($mail, $password)
    {
        if (isset($_POST['button'])) {
            $query = 'SELECT * FROM users WHERE email = :email AND password = :password';
            $stmp = $this->database->prepare($query);
            $stmp->bindParam(":email", $mail);
            $stmp->bindParam(":password", $password);
            $stmp->execute();

            // Stockage des résultats
            return $stmp->fetch() ?: null;
        }
    }
}