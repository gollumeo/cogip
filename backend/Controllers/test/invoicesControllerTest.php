<?php

namespace App\Controllers\Tests;

use App\Controllers\InvoicesController;
use App\Models\Invoices;
use App\Repositories\InvoicesRepository;
use App\Services\InvoicesService;
use PHPUnit\Framework\TestCase;

class InvoicesControllerTest extends TestCase
{
    public function testCreateInvoices()
    {

        require_once(__DIR__ . '/../InvoicesController.php');
        require_once(__DIR__ . '/../../Repositories/InvoicesRepository.php');
        require_once(__DIR__ . '/../../Core/Database.php');
        require_once(__DIR__ . '/../../Models/Invoices.php');
        require_once(__DIR__ . '/../../Services/InvoicesService.php');
        require_once(__DIR__ . '/../../vendor/autoload.php');


        $invoicesController = new InvoicesController();

        $_POST['company_id'] = 1;

        $invoicesController->createInvoice();

        // Check that the invoice has been created by checking the JSON response
        $this->expectOutputString('Invoice successfully created!');
    }

    public function testUpdateInvoices()
    {

        require_once(__DIR__ . '/../InvoicesController.php');
        require_once(__DIR__ . '/../../Repositories/InvoicesRepository.php');
        require_once(__DIR__ . '/../../Core/Database.php');
        require_once(__DIR__ . '/../../Models/Invoices.php');
        require_once(__DIR__ . '/../../Services/InvoicesService.php');
        require_once(__DIR__ . '/../../vendor/autoload.php');

        $invoicesController = new InvoicesController();

        $_POST['id'] = 1;
        $_POST['company_id'] = 1;

        $invoicesController->updateInvoice();

        // Check that the invoice has been created by checking the JSON response
        $this->expectOutputString('Invoice successfully updated!');
    }

   public function testDeleteInvoice()
   {
         require_once(__DIR__ . '/../InvoicesController.php');
         require_once(__DIR__ . '/../../Repositories/InvoicesRepository.php');
         require_once(__DIR__ . '/../../Core/Database.php');
         require_once(__DIR__ . '/../../Models/Invoices.php');
         require_once(__DIR__ . '/../../Services/InvoicesService.php');
         require_once(__DIR__ . '/../../vendor/autoload.php');

         $invoicesController = new InvoicesController();

         $_POST['id'] = 1;

         $invoicesController->deleteInvoice();

         // Check that the invoice has been created by checking the JSON response
         $this->expectOutputString('Invoice successfully deleted!');
   }


}