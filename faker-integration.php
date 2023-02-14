<?php
use Carbon\Carbon;

if (!class_exists('Faker\Factory')) {
    require_once __DIR__ . '/backend/vendor/fzaninotto/faker/src/autoload.php';
}

require_once __DIR__ . '/backend/vendor/carbondate/carbon/src/Carbon/Carbon.php';

$faker = \Faker\Factory::create();

$dbhost = "cogip.czv1a1eic5vz.us-east-1.rds.amazonaws.com";
$dbname = "cogip";
$dbuser = "admin";
$dbpass = "0147852369Pit.";

try {
    $pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    for ($i = 0; $i < 50; $i++) {
        // Insert a row into the "companies" table
        $name = $faker->company;
        $type_id = rand(1, 2);
        $country = $faker->country;
        if ($country == 'Belgium') {
            $tva = 'BE' . $faker->randomNumber(9, true);
        } elseif ($country == 'France') {
            $tva = 'FR' . $faker->randomNumber(9, true);
        } elseif ($country == 'Germany') {
            $tva = 'DE' . $faker->randomNumber(9, true);
        } else {
            $tva = 'XX' . $faker->randomNumber(9, true);
        }
        $created_at = Carbon::now();
        $updated_at = Carbon::now();

        $stmt = $pdo->prepare("INSERT INTO companies (name, type_id, country, tva, created_at, updated_at) VALUES (:name, :type_id, :country, :tva, :created_at, :updated_at)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':type_id', $type_id);
        $stmt->bindParam(':country', $country);
        $stmt->bindParam(':tva', $tva);
        $stmt->bindParam(':created_at', $created_at);
        $stmt->bindParam(':updated_at', $updated_at);
        $stmt->execute();

        // Retrieve the automatically generated "id" value
        $company_id = $pdo->lastInsertId();

        // Insert a row into the "invoices" table
        $created_at = Carbon::now();
        $updated_at = Carbon::now();

        $stmt = $pdo->prepare("INSERT INTO invoices (company_id, created_at, updated_at) VALUES (:company_id, :created_at, :updated_at)");
        $stmt->bindParam(':company_id', $company_id);
        $stmt->bindParam(':created_at', $created_at);
        $stmt->bindParam(':updated_at', $updated_at);
        $stmt->execute();
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

