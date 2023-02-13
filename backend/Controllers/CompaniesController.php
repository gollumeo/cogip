<?php

namespace App\Controllers;

use App\Models\Companies;
use App\Repositories\CompaniesRepository;
use App\Services\CompaniesService;

class CompaniesController
{
    private $companiesService;

    public function __construct()
    {
        $this->companiesService = new CompaniesService(new CompaniesRepository());
    }

    public function createCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setName(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
        $companiesData->setTypeid(filter_input(INPUT_POST, 'type_id', FILTER_VALIDATE_INT));
        $companiesData->setCountry(filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING));
        $companiesData->setTva(filter_input(INPUT_POST, 'tva', FILTER_SANITIZE_STRING));
        $companiesData->setCreatedAt(date('Y-m-d H:i:s'));
        $companiesData->setUpdatedAt(date('Y-m-d H:i:s'));

        if ($this->companiesService->createCompanies($companiesData)) {
            echo "Company successfully created!";
        } else {
            echo "Company creation failed!";
        }
    }

    public function updateCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setName(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
        $companiesData->setTypeid(filter_input(INPUT_POST, 'type_id', FILTER_VALIDATE_INT));
        $companiesData->setCountry(filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING));
        $companiesData->setTva(filter_input(INPUT_POST, 'tva', FILTER_SANITIZE_STRING));
        $companiesData->setCreatedAt(date('Y-m-d H:i:s'));
        $companiesData->setUpdatedAt(date('Y-m-d H:i:s'));

        if ($this->companiesService->updateCompanies($companiesData)) {
            echo "Company successfully updated!";
        } else {
            echo "Company update failed!";
        }
    }

    public function deleteCompanies()
    {
        $id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);

        if ($this->companiesService->deleteCompanies($id)) {
            echo "Company successfully deleted!";
        } else {
            echo "Company deletion failed!";
        }
    }

    public function getAllCompanies()
    {
        $allCompanies = $this->companiesService->getAllCompanies();
        header('Content-Type: application/json');
        echo json_encode($allCompanies, JSON_PRETTY_PRINT);
    }

    public function getCompaniesById()
    {
        $companiesData = new Companies();

        $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid ID']);
            return;
        }
        $companiesData->setId($id);

        $companiesById = $this->companiesService->getCompaniesById($companiesData);

        header('Content-Type: application/json');
        echo json_encode($companiesById);
    }

}
