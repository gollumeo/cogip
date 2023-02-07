<?php

namespace App\Repositories;

use App\Core\Database;
use App\Models\Companies;
use PDO;

class CompaniesRepository
{
    private $database;

    public function __construct()
    {
        $this->database = Database::getInstance()->getConnection();
    }

    public function create(Companies $companiesDate)
    {
        // Prepare the SQL query
        $query = "INSERT INTO companies (name, type_id, country, tva, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(1, $companiesDate->getName());
        $stmt->bindValue(2, $companiesDate->getTypeid());
        $stmt->bindValue(3, $companiesDate->getCountry());
        $stmt->bindValue(4, $companiesDate->getTva());
        $stmt->bindValue(5, $companiesDate->getCreatedat());
        $stmt->bindValue(6, $companiesDate->getUpdatedat());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Companies successfully created!'], true);

        header('Content-type: application/json');
        return $json_encode;
    }

    public function update(Companies $companiesDate): string
    {
        // Prepare the query
        $query = "UPDATE companies SET name = :name, type_id = :type_id, country = :country, tva = :tva, created_at = :created_at, updated_at = :created_at WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // // Bind the parameters
        $stmt->bindValue(':id', $companiesDate->getId());
        $stmt->bindValue(':name', $companiesDate->getName());
        $stmt->bindValue(':type_id', $companiesDate->getTypeid());
        $stmt->bindValue(':country', $companiesDate->getCountry());
        $stmt->bindValue(':tva', $companiesDate->getTva());
        $stmt->bindValue(':created_at', $companiesDate->getCreatedAt());
        $stmt->bindValue(':updated_at', $companiesDate->getUpdatedAt());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Companies successfully updated!'], true);

        header('Content-type: application/json');
        return $json_encode;
    }

    public function delete(Companies $companiesData): string
    {
        // Prepare the query
        $query = "DELETE FROM companies WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(':id', $companiesData->getId());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Companies successfully created!'], true);

        header('Content-type: application/json');
        return $json_encode;
    }

    public function getAllCompanies()
    {
        // Prepare the query
        $query = "SELECT * FROM companies";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Execute the query
        $stmt->execute();


        $companiesData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Set the json response
        $json_encode = json_encode($companiesData, true);

        header('Content-type: application/json');
        echo $json_encode;
    }

    public function getCompaniesById(Companies $companiesData)
    {
        // Prepare the query
        $query = "SELECT * FROM companies WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Execute the query
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode($companiesData, true);

        header('Content-type: application/json');
        echo $json_encode;
    }
}