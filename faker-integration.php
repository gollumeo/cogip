<?php
use Carbon\Carbon;
use Faker\Factory;

if (!class_exists('Faker\Factory')) {
    require_once __DIR__ . '/vendor/fzaninotto/faker/src/autoload.php';
}

require_once __DIR__ . '/vendor/carbondate/carbon/src/Carbon/Carbon.php';

$faker = Factory::create();

$dbhost = "cogip.czv1a1eic5vz.us-east-1.rds.amazonaws.com";
$dbname = "cogip";
$dbuser = "admin";
$dbpass = "0147852369Pit.";

try {
    $pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    for ($i = 0; $i < 50; $i++) {
        // Generate a new value for the name field
        $name = $faker->name;
        $id = $i + 4;
        $stmt = $pdo->prepare("UPDATE contacts SET name = :name WHERE id = :id");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

