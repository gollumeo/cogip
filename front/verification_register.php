<?php

// Vérifier si le bouton "S'inscrire" a été cliqué
if (isset($_POST['register'])) {
    // Paramètres de connexion à la base de données
    $host = "localhost";
    $dbname = "becode";
    $username = "my_user";
    $password = "my_password";

    // Établir une connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Récupération des informations de l'utilisateur
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Préparation de la requête d'insertion
    $query = 'INSERT INTO user (email, password) VALUES (:email, :password)';
    $stmt = $pdo->prepare($query);

    // Systématisation des données d'entrée
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);

    // Exécution de la requête
    $stmt->execute();

    // Redirection de l'utilisateur vers la page de connexion
    header('Location: login.php');
}