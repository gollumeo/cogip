<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Login</title>
  <link rel="stylesheet" href="login.css">
</head>

<body class="body_form_login">
  <a href="http://localhost:5173" class="a_form_login">
    <img src="logo_COGIP.svg" alt="Logo Cogip" class="logo_cogip_login">
  </a>
  <img src="bulb.png" alt="bulb" class="bulb_php_login">
  <img src="black%20notebook%20and%20green%20arm.png" alt="black notebook and green arm" class="arm_php_login">
  <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" class="form_content_login">
    <h1 class="title_register_login">
      LOGIN
    </h1>
    <div class="form_login">
      <label for="mail" class="form_label_login">Adresse-email:</label>
      <input type="text" name="mail" required class="form_input_login">
    </div>
    <div class="form_login">
      <label for="password" class="form_label_login">Mot de passe:</label>
      <input type="password" name="password" required class="form_input_login">
    </div>
    <div class="form_submit_login">
      <button type="submit" name="button" class="form_submit_btn_login">Se connecter</button>
    </div>
  </form>
  <?php include 'verification_login.php'; ?>
</body>

</html>