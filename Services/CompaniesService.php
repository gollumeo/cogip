<?php

namespace Services;

use Models\Companies;
use Repositories\CompaniesRepository;

class CompaniesService
{
    private $companiesRepository;

    public function __construct()
    {
        $this->companiesRepository = new CompaniesRepository();
    }

    public function createCompanies(Companies $companiesData)
    {
        return $this->companiesRepository->create($companiesData);
    }

    public function updateCompanies(Companies $companiesData)
    {
        return $this->companiesRepository->update($companiesData);
    }

    public function deleteCompanies(Companies $companiesData)
    {
        return $this->companiesRepository->delete($companiesData);
    }

    public function getAllCompanies()
    {
        return $this->companiesRepository->getAllCompanies();
    }

    public function getCompaniesById(Companies $companiesData)
    {
        return $this->companiesRepository->getCompaniesById($companiesData);
    }
}
