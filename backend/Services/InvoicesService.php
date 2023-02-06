<?php

namespace App\Services;

use App\Models\Invoices;
use App\Repositories\InvoicesRepository;

class InvoicesService
{
    private $invoicesRepository;

    public function __construct()
    {
        $this->invoicesRepository = new InvoicesRepository();
    }

    public function createInvoice(Invoices $invoiceData)
    {
        return $this->invoicesRepository->create($invoiceData);
    }

    public function updateInvoice(Invoices $invoiceData)
    {
        return $this->invoicesRepository->update($invoiceData);
    }

    public function deleteInvoice(Invoices $invoiceData)
    {
        return $this->invoicesRepository->delete($invoiceData);
    }

    public function getAllInvoices()
    {
        return $this->invoicesRepository->getAllInvoices();
    }

    public function getInvoiceById(Invoices $invoiceData)
    {
        return $this->invoicesRepository->getInvoiceById($invoiceData);
    }
}
