<?php
require_once('../db.php'); // Incluir conexión

header('Content-Type: application/json');

$query = "SELECT * FROM productos";
$result = $conn->query($query);

$productos = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $productos[] = $row;
    }
}

echo json_encode($productos);

$conn->close();
?>
