<?php

namespace App\Repositories;

use App\Core\Database;
use App\Models\Invoices;
use PDO;

class InvoicesRepository
{
    private $database;

    public function __construct()
    {
        $this->database = Database::getInstance()->getConnection();
    }

    public function create(Invoices $invoiceData)
    {
        // Prepare the SQL query
        $query = "INSERT INTO invoices (company_id, created_at, updated_at) VALUES (?, ?, ?)";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(1, $invoiceData->getCompanyId());
        $stmt->bindValue(2, $invoiceData->getCreatedAt());
        $stmt->bindValue(3, $invoiceData->getCreatedAt());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Invoice successfully created!'], true);

        header('Content-type: application/json');
        return $json_encode;
    }

    public function update(Invoices $invoiceData): string
    {
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
        $json_encode = json_encode(['message' => 'Invoice successfully updated!'], true);

        header('Content-type: application/json');
        return $json_encode;
    }

    public function delete(Invoices $invoiceData): string
    {
        // Prepare the query
        $query = "DELETE FROM invoices WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Bind the parameters
        $stmt->bindValue(':id', $invoiceData->getId());

        // Execute the statement
        $stmt->execute();

        // Set the json response
        $json_encode = json_encode(['message' => 'Invoice successfully created!'], true);

        header('Content-type: application/json');
        return $json_encode;
    }

    public function getAllInvoices()
    {
        // Prepare the query
        $query = "SELECT * FROM invoices";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Execute the query
        $stmt->execute();


        $invoiceData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Set the json response
        $json_encode = json_encode($invoiceData, true);

        header('Content-type: application/json');
        echo $json_encode;
    }

    public function getInvoiceById(Invoices $invoiceData):
    {
        // Prepare the query
        $query = "SELECT * FROM invoices WHERE id = :id";

        // Prepare the statement
        $stmt = $this->database->prepare($query);

        // Set the json response
        $json_encode = json_encode($invoiceData, true);

        header('Content-type: application/json');
        echo $json_encode;
    }
}