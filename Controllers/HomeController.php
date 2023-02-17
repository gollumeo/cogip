<?php

namespace App\Controllers;

use Core\Controller;

class HomeController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        return $this->view('welcome',["name" => "Cogip"]);
    }
}