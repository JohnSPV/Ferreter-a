// Función para cargar el catálogo de productos
function cargarCatalogo() {
    fetch('php/api/catalogo.php')
        .then((response) => response.json())
        .then((productos) => {
            const tabla = document.getElementById('tablaProductos');
            tabla.innerHTML = ''; // Limpia la tabla antes de rellenarla
            productos.forEach((producto) => {
                tabla.innerHTML += `
                    <tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.descripcion}</td>
                        <td>$${producto.precio}</td>
                        <td>${producto.stock}</td>
                    </tr>
                `;
            });
        })
        .catch((error) => console.error('Error al cargar el catálogo:', error));
}

// Evento principal al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Cargar catálogo al iniciar la página
    cargarCatalogo();

    // Configurar el evento de envío del formulario
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
                    cargarCatalogo(); // Actualiza la tabla automáticamente
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch((error) => console.error('Error:', error));
    });
});
