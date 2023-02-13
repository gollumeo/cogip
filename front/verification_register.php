<?php

// Vérifier si le bouton "S'inscrire" a été cliqué
if (isset($_POST['register'])) {
    // Paramètres de connexion à la base de données
    $host = $_ENV['DB_HOST'];
    $dbname = $_ENV['DB_NAME'];
    $username = $_ENV['DB_USER'];
    $password = $_ENV['DB_PASS'];

    // Établir une connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Récupération des informations de l'utilisateur
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $first_name = filter_input(INPUT_POST, 'first_name', FILTER_SANITIZE_EMAIL);
    $last_name = filter_input(INPUT_POST, 'last_name', FILTER_SANITIZE_EMAIL);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Préparation de la requête d'insertion
    $query = 'INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name,:email, :password, :created_at, :updated_at)';
    $stmt = $pdo->prepare($query);

    // Systématisation des données d'entrée
    $now = date("Y-m-d H:i:s");

    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':first_name', $first_name);
    $stmt->bindParam(':last_name', $last_name);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':created_at', $now);
    $stmt->bindParam(':updated_at', $now);

    // Exécution de la requête
    $stmt->execute();

    // Redirection de l'utilisateur vers la page de connexion
    header('Location: login.php');
}