<?php

namespace App\Core;

use Dotenv;
use PDO;
use PDOException;

class Database
{
    public static $this;
    private $hostname;
    private $dbname;
    private $username;
    private $password;
    private static $instance;
    private $conn;

    private function __construct()
    {
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();
        $this->conn = null;
        $this->hostname = "185.98.131.160";
        $this->dbname = "pierr2048665";
        $this->username = "pierr2048665";
        $this->password = "0147852369Pit!";


        try {
            $this->conn = new PDO("mysql:host=$this->hostname;$this->dbname", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }
    }

    /**
     * @return mixed
     */
    public function getHostname(): mixed
    {
        return $this->hostname;
    }

    /**
     * @return mixed
     */
    public function getDbname(): mixed
    {
        return $this->dbname;
    }

    /**
     * @return mixed
     */
    public function getUsername(): mixed
    {
        return $this->username;
    }

    /**
     * @return mixed
     */
    public function getPassword(): mixed
    {
        return $this->password;
    }

    public static function getInstance(): Database
    {
        if (!self::$instance) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    public function getConnection()
    {
        return $this->conn;
    }
}
