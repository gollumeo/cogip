<?php

namespace App\Core;

require_once __DIR__ . '/../vendor/autoload.php';
use PDO;
use PDOException;
use Dotenv\Dotenv;

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
        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->load();

        $this->conn = null;
        $this->hostname = $_ENV['DB_HOST'];
        $this->dbname = $_ENV['DB_NAME'];
        $this->username = $_ENV['DB_USER'];
        $this->password = $_ENV['DB_PASS'];


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
