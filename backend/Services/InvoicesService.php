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
        $this->invoicesRepository->create($invoiceData);
        echo "Invoice successfully created!";
    }

    public function updateInvoice(Invoices $invoiceData)
    {
        $this->invoicesRepository->update($invoiceData);
        echo "Invoice successfully updated!";
    }

    public function deleteInvoice(Invoices $invoiceData)
    {
        $this->invoicesRepository->delete($invoiceData);
        echo "Invoice successfully deleted!";
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
