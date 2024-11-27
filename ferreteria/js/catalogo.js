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

// Cargar el catálogo al abrir la página
document.addEventListener('DOMContentLoaded', cargarCatalogo);
