<?php

// Vérifier si le bouton "Se connecter" a été cliqué
if (isset($_POST['button'])) {
    $host = "localhost";
    $dbname = "becode";
    $username = "my_user";
    $password = "my_password";
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Récupération des informations d'identification de l'utilisateur
    $mail = $_POST['mail'];
    $password = $_POST['password'];

    // Préparation de la requête pour récupérer les informations de l'utilisateur
    $query = 'SELECT * FROM user WHERE email = :email';
    $stmp = $pdo->prepare($query);
    $stmp->bindParam(":email", $mail);
    $stmp->execute();

    // Stockage des résultats
    $user = $stmp->fetch() ?: null;

    // Vérification de l'existence de ladresse e-mail dans la base de données
    if (!$user) {
        echo 'Adresse e-mail incorrecte.';
    } else {
        // Vérification du mot de passe
        if (password_verify($password, $user['password'])) {
            // Démarrage de la session et redirection de l'utilisateur vers la page protégée
            session_start();
            $_SESSION['user'] = $user;
            header('Location: index.html');
        } else {
            echo 'Mot de passe incorrect.';
        }
    }
}