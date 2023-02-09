<?php
/**
 * Populate MySQL Table Using faker
 * 
 * @author 
 */
require_once('./vendor/autoload.php');
// require_once('./vendor/vlucas/src/Dotenv.php');


try {
    $count = 100000;
    $faker = \Faker\Factory::create();

    $hostname = "cogip.czv1a1eic5vz.us-east-1.rds.amazonaws.com";
    $username = "admin";
    $password = "0147852369Pit.";
    $dbname = "cogip";


    //Connecting MySQL Database
    $pdo = new PDO('mysql:host=$hostname;dbname=$dbname', '$username', '$password', array(
            PDO::ATTR_PERSISTENT => true
    )
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Insert the data
    $sql = 'INSERT INTO invoices (company_id, created_at, updated_at) 
    VALUES (:company_id, :created_at, :updated_at)';
    $stmt = $pdo->prepare($sql);

    for ($i = 0; $i < $count; $i++) {
        $date = $faker->dateTime($max = 'now', 'UTC')->format('Y-m-d H:i:s');
        $stmt->execute(
            [
                ':company_id' => $faker->company_id,
                ':created_at' => $date,
                ':updated_at' => $date
            ]
        );
    }
} catch (Exception $e) {
    echo '<pre>';
    print_r($e);
    echo '</pre>';
    exit;
}