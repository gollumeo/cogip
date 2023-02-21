<?php

namespace App\Controllers;

use App\Models\Invoices;
use App\Repositories\InvoicesRepository;
use App\Services\InvoicesService;

// TODO: Sanitization & Validation of inputs

class InvoicesController
{
    //    private $invoicesRepository;
    private $invoicesService;
    /**
     * @var InvoicesRepository
     */
    private $invoicesRepository;

    public function __construct()
    {
        $this->invoicesRepository = new InvoicesRepository();
        $this->invoicesService = new InvoicesService();
    }

    public function createInvoice()
    {
        $companyId = $_POST['company_id'];
        $invoiceData = new Invoices($companyId);

        $invoiceData->setCreatedAt(date('Y-m-d H:i:s'));
        $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->invoicesService->createInvoice($invoiceData);
    }

    public function updateInvoice()
    {
        $company_id = $_POST['company_id'];
        $invoiceData = new Invoices($company_id);
        $invoiceData->setId($_POST['id']);
        $invoiceData->setCompanyId($_POST['company_id']);
        $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->invoicesService->updateInvoice($invoiceData);
    }

    public function deleteInvoice()
    {
        $invoiceData = new Invoices(new InvoicesService());

        $invoiceData->setId($_POST['id']);

        $this->invoicesService->deleteInvoice($invoiceData);
    }

    public function getAllInvoices()
    {
        $allInvoices = $this->invoicesService->getAllInvoices();
        header('Content-Type: application/json');
        echo $allInvoices;
    }

    public function getInvoiceById()
    {
        $invoiceData = new Invoices();

        $invoiceData->setId($_GET['id']);

        $invoiceById = $this->invoicesService->getInvoiceById($invoiceData);
        header('Content-Type: application/json');
        echo $invoiceById;

    }
}