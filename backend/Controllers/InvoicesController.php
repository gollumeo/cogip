<?php

namespace App\Controllers;

use App\Models\Invoices;
use App\Repositories\InvoicesRepository;
use App\Services\InvoicesService;
use Exception;

class InvoicesController
{
    private $invoicesService;

    public function __construct()
    {
        $this->invoicesService = new InvoicesService();
    }

    public function createInvoice()
    {
        try {
            $companyId = (int)$_POST['company_id'];
            if (!filter_var($companyId, FILTER_VALIDATE_INT)) {
                throw new Exception('Invalid company id');
            }
            $invoiceData = new Invoices($companyId);

            $invoiceData->setCreatedAt(date('Y-m-d H:i:s'));
            $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

            $this->invoicesService->createInvoice($invoiceData);
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }

    public function updateInvoice()
    {
        try {
            $invoiceData = new Invoices();

            $invoiceData->setId((int)$_POST['id']);
            if (!filter_var($invoiceData->getId(), FILTER_VALIDATE_INT)) {
                throw new Exception('Invalid invoice id');
            }

            $invoiceData->setCompanyId((int)$_POST['company_id']);
            if (!filter_var($invoiceData->getCompanyId(), FILTER_VALIDATE_INT)) {
                throw new Exception('Invalid company id');
            }

            $invoiceData->setUpdatedAt(date('Y-m-d H:i:s'));

            $this->invoicesService->updateInvoice($invoiceData);
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }

    public function deleteInvoice()
    {
        try {
            $invoiceData = new Invoices();

            $invoiceData->setId((int)$_POST['id']);
            if (!filter_var($invoiceData->getId(), FILTER_VALIDATE_INT)) {
                throw new Exception('Invalid invoice id');
            }

            $this->invoicesService->deleteInvoice($invoiceData);
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }

    public function getAllInvoices()
    {
        try {
            $allInvoices = $this->invoicesService->getAllInvoices();
            header('Content-Type: application/json');
            echo $allInvoices;
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }

    public function getInvoiceById()
    {
        if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
            header('HTTP/1.1 400 Bad Request');
            echo 'Invalid invoice ID';
            return;
        }

        $invoiceData = new Invoices();
        $invoiceData->setId(intval($_GET['id']));

        $invoiceById = $this->invoicesService->getInvoiceById($invoiceData);

        if (!$invoiceById) {
            header('HTTP/1.1 404 Not Found');
            echo 'Invoice not found';
            return;
        }

        header('Content-Type: application/json');
        echo $invoiceById;
    }
}
