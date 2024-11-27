<?php
$host = 'localhost'; // Servidor de base de datos
$user = 'root';      // Usuario de MySQL
$password = '';      // Contraseña del usuario (dejar vacío por defecto en XAMPP)
$dbname = 'ferreteria'; // Nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
