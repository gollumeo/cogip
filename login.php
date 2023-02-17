<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Login</title>
  <link rel="stylesheet" href="css/basics.css" media="screen" title="no title" charset="utf-8">
</head>

<body>
  <form action="https://cogip-api.pierre-mauriello.be/isLogged" method="post">
    <div>
      <label for="mail">Adresse-email:</label>
      <input type="text" name="mail" required>
    </div>
    <div>
      <label for="password">Mot de passe:</label>
      <input type="password" name="password" required>
    </div>
    <div>
      <button type="submit" name="button">Se connecter</button>
    </div>
  </form>
  <?php /*include '/verification_login.php'; */?>
</body>

</html>