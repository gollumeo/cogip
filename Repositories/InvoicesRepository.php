<?php

namespace Repositories;

use Core\Database;
use Models\Invoices;
use PDO;

class InvoicesRepository
{
    private $database;
    private $hostname;

    public function __construct()
    {

        $this->database = Database::getInstance()->getConnection();
    }

    public function create(Invoices $invoiceData)
    {

        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();
        // Prepare the SQL query
        $query = "INSERT INTO invoices (company_id, created_at, updated_at) VALUES (?, ?, ?)";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(1, $invoiceData->getCompanyId());
        $stmt->bindValue(2, $invoiceData->getCreatedAt());
        $stmt->bindValue(3, $invoiceData->getUpdatedAt());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Invoices successfully created!'], true);

        return $json_encode;

    }

    public function update(Invoices $invoiceData): string
    {

        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();
        // Prepare the query
        $query = "UPDATE invoices SET company_id = :company_id, updated_at = :updated_at WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(':id', $invoiceData->getId());
        $stmt->bindValue(':company_id', $invoiceData->getCompanyId());
        $stmt->bindValue(':updated_at', $invoiceData->getUpdatedAt());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Invoices successfully updated!'], true);

        return $json_encode;
    }

    public function delete(Invoices $invoiceData): string
    {
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();
        // Prepare the query
        $query = "DELETE FROM invoices WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(':id', $invoiceData->getId());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_response = json_encode(['message' => 'Company successfully deleted!'], JSON_THROW_ON_ERROR);

        header('Content-Type: application/json');
        return $json_response;
    }

    public function getAllInvoices()
    {
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();

        // Prepare the query
        $query = "SELECT * FROM invoices";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Execute the query
        $stmt->execute();

        $invoiceData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Set the json response
        $json = json_encode($invoiceData, JSON_PRETTY_PRINT);

        header('Content-type: application/json');
        return $json;
    }

    public function getInvoiceById(Invoices $invoiceData)
    {
        $query = "USE cogip";
        $stmt = $this->database->prepare($query);
        $stmt->execute();
        // Prepare the query
        $query = "SELECT * FROM invoices WHERE id = :id";
        $id = $invoiceData->getId();
        $stmt->bindParam(':id', $id);

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Execute the query
        $stmt->execute();

        // Fetch the result
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        // Set the json response
        $json_response = json_encode($result, JSON_PRETTY_PRINT);

        header('Content-type: application/json');
        echo $json_response;
    }
}