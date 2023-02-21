<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Registration</title>
  <link rel="stylesheet" href="./src/assets/scss/register.css">
</head>

<body class="body_form">
  <a href="http://localhost:5173" class="a_form">
    <img src="./public/img/logo_COGIP.svg" alt="Logo Cogip" class="logo_cogip">
  </a>
  <img src="./public/img/bulb.png" alt="bulb" class="bulb_php">
  <img src="./public/img/black notebook and green arm.png" alt="black notebook and green arm" class="arm_php">
  <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" class="form_content">
    <h1 class="title_register">
      SIGN UP
    </h1>
    <div class="form">
      <label for="first_name" class="form_label">First Name:</label>
      <input type="text" name="first_name" required class="form_input">
    </div>
    <div class="form">
      <label for="mail" class="form_label">Last Name:</label>
      <input type="text" name="last_name" required class="form_input">
    </div>
    <div class="form">
      <label for="mail" class="form_label">Email address:</label>
      <input type="email" name="mail" required class="form_input">
    </div>
    <div class="form">
      <label for="password" class="form_label">Password:</label>
      <input type="password" name="password" required class="form_input">
    </div>
    <div class="form">
      <label for="password_confirm" class="form_label">Confirm password:</label>
      <input type="password" name="password_confirm" required class="form_input">
    </div>
    <div class="form_submit">
      <button type="submit" name="register" class="form_submit_btn">Register</button>
    </div>
  </form>
  <?php include './verification_register.php'; ?>
</body>

</html>