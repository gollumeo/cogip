<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Registration</title>
  <link rel="stylesheet" href="css/basics.css" media="screen" title="no title" charset="utf-8">
</head>

<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <div>
      <label for="mail">Adresse-email:</label>
      <input type="email" name="mail" required>
    </div>
    <div>
      <label for="password">Mot de passe:</label>
      <input type="password" name="password" required>
    </div>
    <div>
      <button type="submit" name="register">S'inscrire</button>
    </div>
  </form>
  <?php include './verification.php'; ?>
</body>
</html>
