<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Login</title>
  <link rel="stylesheet" href="./src/assets/scss/register.css">
</head>

<body class="body_form">
  <a href="http://localhost:5173"><img src="./public/img/logo_COGIP.svg" alt="Logo Cogip" class="logo_cogip"></a>
  <img src="./public/img/bulb.png" alt="bulb" class="bulb_php">
  <img src="./public/img/black notebook and green arm.png" alt="black notebook and green arm" class="arm_php">
  <form action="#" method="post" class="form_content">
    <h1 class="title_register">
      LOGIN
    </h1>
    <div class="form">
      <label for="mail" class="form_label">Adresse-email:</label>
      <input type="text" name="mail" required class="form_input">
    </div>
    <div class="form">
      <label for="password" class="form_label">Mot de passe:</label>
      <input type="password" name="password" required class="form_input">
    </div>
    <div class="form_submit">
      <button type="submit" name="button" class="form_submit_btn">Se connecter</button>
    </div>
  </form>
  <?php include '/verification_login.php'; ?>
</body>

</html>