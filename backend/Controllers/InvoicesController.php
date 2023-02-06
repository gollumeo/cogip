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

    public function __construct()
    {
        $this->invoicesRepository = new InvoicesRepository();
        $this->invoicesService = new InvoicesService();
    }

    public function createInvoice()
    {
        $invoiceData = new Invoices();

        $invoiceData->setCompanyId($_POST['company_id']);
        $invoiceData->setCreatedAt(date('Y-m-d H:i:s'));
        $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->invoicesService->createInvoice($invoiceData);
    }

    public function updateInvoice()
    {
        $invoiceData = new Invoices();

        $invoiceData->setId($_POST['id']);
        $invoiceData->setCompanyId($_POST['company_id']);
        $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

        $this->invoicesService->updateInvoice($invoiceData);
    }

    public function deleteInvoice()
    {
        $invoiceData = new Invoices();

        $invoiceData->setId($_POST['id']);

        $this->invoicesService->deleteInvoice($invoiceData);
    }

    public function getAllInvoices()
    {
        $this->invoicesService->getAllInvoices();
    }

    public function getInvoiceById()
    {
        $invoiceData = new Invoices();

        $invoiceData->setId($_GET['id']);

        $this->invoicesService->getInvoiceById($invoiceData);
    }
}
