<?php
require_once('../db.php'); // Incluir la conexión a la base de datos

header('Content-Type: application/json');

// Obtener los datos enviados desde el frontend
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['nombre'], $data['descripcion'], $data['precio'], $data['stock'])) {
    $nombre = $conn->real_escape_string($data['nombre']);
    $descripcion = $conn->real_escape_string($data['descripcion']);
    $precio = $conn->real_escape_string($data['precio']);
    $stock = $conn->real_escape_string($data['stock']);

    $query = "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ('$nombre', '$descripcion', $precio, $stock)";
    
    if ($conn->query($query)) {
        echo json_encode(["status" => "success", "message" => "Producto agregado exitosamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al agregar producto: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
}

$conn->close();
?>
