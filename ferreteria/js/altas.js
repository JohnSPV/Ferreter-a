document.getElementById('formAltas').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;

    fetch('php/api/altas.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio),
            stock: parseInt(stock),
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'success') {
                alert('Producto agregado correctamente');
                document.getElementById('formAltas').reset();
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch((error) => console.error('Error:', error));
});
