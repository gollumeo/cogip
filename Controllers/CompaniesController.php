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
        $this->companiesRepository = new CompaniesRepository();
        $this->companiesService = new CompaniesService();
    }

    public function createCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setName($_POST['name']);
        $companiesData->setTypeid($_POST['type_id']);
        $companiesData->setCountry($_POST['country']);
        $companiesData->setTva($_POST['tva']);
        $companiesData->setCreatedAt(date('Y-m-d H:i:s'));
        $companiesData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->companiesService->createCompanies($companiesData);

        echo "Company successfully created!";
    }

    public function updateCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setName($_POST['name']);
        $companiesData->setTypeId($_POST['type_id']);
        $companiesData->setCountry($_POST['country']);
        $companiesData->setTva($_POST['tva']);
        $companiesData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->companiesService->createCompanies($companiesData);

        echo "Company successfully updated!";
    }

    public function deleteCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setId($_POST['id']);

        $this->companiesService->deleteCompanies($companiesData);

        echo "Company successfully deleted!";
    }

    public function getAllCompanies()
    {
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
        $allCompanies = trim($this->companiesService->getAllCompanies());
        header('Content-Type: application/json');
        echo $allCompanies;
    }

    public function getCompaniesById()
    {
        $companiesData = new Companies();

        $companiesData->setId($_GET['id']);

        $companiesById = $this->companiesService->getCompaniesById($companiesData);
        header('Content-Type: application/json');
        echo $companiesById;
    }
}