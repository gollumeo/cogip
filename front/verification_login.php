<?php

use Dotenv\Dotenv;
require_once 'vendor/vlucas/phpdotenv/src/Dotenv.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Vérifier si le bouton "Se connecter" a été cliqué
if (isset($_POST['button'])) {
    $host = $_ENV['DB_HOST'];
    $dbname = $_ENV['DB_NAME'];
    $username = $_ENV['DB_USER'];
    $password = $_ENV['DB_PASS'];
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Récupération des informations d'identification de l'utilisateur
    $mail = $_POST['mail'];
    $password = $_POST['password'];

    // Préparation de la requête pour récupérer les informations de l'utilisateur
    $query = 'SELECT * FROM users WHERE email = :email';
    $stmp = $pdo->prepare($query);
    $stmp->bindParam(":email", $mail);
    $stmp->execute();

    // Stockage des résultats
    $user = $stmp->fetch() ?: null;

    // Vérification de l'existence de l'adresse e-mail dans la base de données
    if (!$user) {
        echo 'Adresse e-mail incorrecte.';
    } else {
        // Vérification du mot de passe
        if (password_verify($password, $user['password'])) {
            // Démarrage de la session et redirection de l'utilisateur vers la page protégée
            session_start();
            $_SESSION['user'] = $user;
            header('Location: https://cogip.pierre-mauriello.be/dashboard');
        } else {
            echo 'Mot de passe incorrect.';
        }
    }
}