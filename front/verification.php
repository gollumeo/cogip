<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if (isset($_POST['button'])) {


    $host = "localhost";
    $dbname = "becode";
    $username = "my_user";
    $password = "my_password";
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // Récupération des informations d'identification de l'utilisateur
    $mail = $_POST['mail'];
    $password = $_POST['password'];
    $query = 'SELECT * FROM user WHERE email = :email';
    $stmp = $pdo->prepare($query);

    //Synetisation
    if (isset($_POST["button"])) {
        $inputs = array(
            "email" => FILTER_SANITIZE_EMAIL,
        );
    }

    $stmp->bindParam(":email", $mail);

    // Exécution de la requête
    $stmp->execute();

    // Stockage des résultats
    $user = $stmp->fetch() ?: null;

    // Vérification des informations d'identification
    // TODO verifier le mot de passe.
    $password = 'motdepasse';
    if ((isset($_POST['password']) && ($_POST['password'])) != $password) {
        if (!isset($_SESSION['count'])) {
            $_SESSION['count'] = 0;
        } else {
            $_SESSION['count']++;
        }
    }
    if ($user && $password === $user['password']) {

        // Les informations d'identification sont correctes, définir une variable de session pour indiquer que l'utilisateur est connecté
        $_SESSION['id'] = $user['id'];
        header('Location: src/dashboard');
        if (!isset($_SESSION)) {
            session_start();
        }
    } else {
        // Les informations d'identification sont incorrectes, affichez un message d'erreur et redirigez l'utilisateur vers la page de connexion
        ?><span style="color: red;"><br>Nom d'utilisateur ou mot de passe incorrect.</span>
        <?php
        exit;
    }
}