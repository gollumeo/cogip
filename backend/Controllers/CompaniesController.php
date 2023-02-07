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
    }

    public function updateCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setName($_POST['name']);
        $companiesData->setTypeid($_POST['type_id']);
        $companiesData->setCountry($_POST['country']);
        $companiesData->setTva($_POST['tva']);
        $companiesData->setCreatedAt(date('Y-m-d H:i:s'));
        $companiesData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->companiesService->createCompanies($companiesData);
    }

    public function deleteCompanies()
    {
        $companiesData = new Companies();

        $companiesData->setId($_POST['id']);

        $this->companiesService->deleteCompanies($companiesData);
    }

    public function getAllCompanies()
    {
        $this->companiesService->getAllCompanies();
    }

    public function getCompaniesByid()
    {
        $companiesData = new Companies();

        $companiesData->setId($_GET['id']);

        $this->companiesService->getCompaniesByid($companiesData);
    }
}
