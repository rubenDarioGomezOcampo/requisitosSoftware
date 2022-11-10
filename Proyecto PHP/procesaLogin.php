<?php
include('menu.php');
    $usuario = $_POST['userNameSolicitado'];
    $password = $_POST['passwordSolicitado'];
    $passwordEncriptada = sha1(md5($password));

    echo $usuario;
    echo $password;
    echo $passwordEncriptada;

    $mysql = new mysqli("localhost", "root", "", "proyecto_php");
  if ($mysql->connect_error)
    die('Problemas con la conexion a la base de datos');

    $registros = $mysql->query("SELECT userName, userPassword FROM users
     WHERE userName='$usuario' && userPassword='$passwordEncriptada'") or
    die($mysql->error);

  if ($reg = $registros->fetch_array())
    {echo "El usuario es valido";
        session_start();
        $_SESSION['usuarioX'] = $usuario;
        $_SESSION['claveX'] = $passwordEncriptada;
    header("Location: formularioRegistro.php");}
  else{
    echo 'usuario invalido';
    header("Location: index.php");
  }
  $mysql->close();

?>