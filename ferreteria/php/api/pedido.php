<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include '../db.php';


header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['producto_id']) && isset($data['cantidad'])) {
    $producto_id = $data['producto_id'];
    $cantidad = $data['cantidad'];

    $stmt = $conn->prepare("INSERT INTO pedidos (producto_id, cantidad) VALUES (?, ?)");
    $stmt->execute([$producto_id, $cantidad]);

    echo json_encode(['message' => 'Pedido registrado exitosamente']);
} else {
    echo json_encode(['message' => 'Datos incompletos']);
}
?>
