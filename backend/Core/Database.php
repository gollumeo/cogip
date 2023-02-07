<?php

namespace App\Core;

use Dotenv;
use PDO;
use PDOException;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

class Database
{

    private $hostname;
    private $dbname;
    private $username;
    private $password;
    private static $instance;
    private $conn;

    public function __construct()
    {

        $this->hostname = $_ENV['DB_HOST'];
        $this->dbname = $_ENV['DB_NAME'];
        $this->username = $_ENV['DB_USER'];
        $this->password = $_ENV['DB_PASS'];

        try {
            return $this->conn = new PDO("mysql:host=$this->hostname;dbname=$this->dbname", $this->username, $this->password);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public static function getInstance(): Database
    {
        if (!self::$instance) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConnection()
    {
        return $this->conn;
    }
}