document.addEventListener('DOMContentLoaded', function() {
    loadLocations(); // Cargar locaciones al cargar la página
});

// Para lógica de Front (comunicación con el Back)
document.getElementById('formularioCliente').addEventListener('submit', function(event) {
    event.preventDefault();

    const location = {
        cc: document.getElementById('cc').value,
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        latitude: parseFloat(document.getElementById('lat').value),
        longitude: parseFloat(document.getElementById('lng').value),
    };

    // Realizar el POST para crear una nueva locación
    fetch('/api/locations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(location)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Locación creada:', data);
        document.getElementById('formularioCliente').reset(); // Resetear el formulario
        alert('Locación creada con éxito');
        loadLocations(); // Recargar la lista de locaciones
    })
    .catch(error => console.error('Error al crear la locación:', error));
});

// Función para buscar una locación por ID
function getLocationById(id) {
    fetch(`/api/locations/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log('Locación encontrada:', data);
        })
        .catch(error => console.error('Error al buscar la locación:', error));
}

// Función para eliminar una locación
document.querySelector('.button-delete').addEventListener('click', function(event) {
    event.preventDefault();
    const id = document.getElementById('delete_id').value;

    if (id) {
        deleteLocation(id);
    }
});

function deleteLocation(id) {
    fetch(`/api/locations/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Locación eliminada:', data);
        alert('Locación eliminada con éxito');
        loadLocations(); // Recargar la lista de locaciones tras eliminar
    })
    .catch(error => console.error('Error al eliminar la locación:', error));
}

// Función para obtener locaciones cercanas
function getLocationNearby(lat, lng) {
    fetch(`/api/locations/nearby?lat=${lat}&lng=${lng}`)
        .then(response => response.json())
        .then(data => {
            console.log('Locaciones cercanas:', data);
        })
        .catch(error => console.error('Error al obtener locaciones cercanas:', error));
}

// Función para obtener todas las locaciones y mostrarlas en la tabla
function loadLocations() {
    fetch('/api/locations') // Ruta de tu API que obtiene las locaciones
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('locationsTableBody');
            tbody.innerHTML = ''; // Limpiar cualquier dato existente en la tabla

            // Iterar sobre los datos y generar filas de tabla
            data.forEach(location => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${location.id}</td>
                    <td>${location.name}</td>
                    <td>${location.address}</td>
                    <td>${location.latitude}</td>
                    <td>${location.longitude}</td>
                    <td>
                        <button onclick="getLocationById(${location.id})">Ver</button>
                        <button onclick="deleteLocation(${location.id})">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al cargar las locaciones:', error));
}
