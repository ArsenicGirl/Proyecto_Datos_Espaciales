document.addEventListener('DOMContentLoaded', function() {
    let map = L.map('map').setView([4.635519054890594, -74.1068586815587], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker;

    // Evento para agregar marcador en el mapa al hacer click
    map.addEventListener("click", (e) => {
        if (marker) {
            marker.removeFrom(map);
        }
        marker = L.marker([e.latlng.lat, e.latlng.lng], {}).addTo(map);

        // Actualizar los campos de latitud y longitud en el formulario
        document.getElementById('lat').value = e.latlng.lat;
        document.getElementById('lng').value = e.latlng.lng;
    });

    // Cargar las locaciones desde la base de datos y mostrarlas en la tabla y el mapa
    loadLocations();

    // Función para cargar locaciones
    function loadLocations() {
        fetch('/api/locations')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    data.forEach(location => {
                        // Agregar locaciones al mapa
                        addMarkerToMap(location.latitude, location.longitude, location.name);
                        
                        // Agregar locaciones a la tabla
                        addLocationToTable(location);
                    });
                } else {
                    console.log('No se encontraron locaciones');
                }
            })
            .catch(error => console.error('Error al cargar las locaciones:', error));
    }

    // Función para agregar un marcador al mapa
    function addMarkerToMap(lat, lng, name) {
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${name}</b><br>Latitud: ${lat}, Longitud: ${lng}`).openPopup();
    }

    // Función para agregar locaciones a la tabla
    function addLocationToTable(location) {
        const table = document.getElementById('locationsTable');
        const row = table.insertRow();
        row.insertCell(0).textContent = location.id;
        row.insertCell(1).textContent = location.name;
        row.insertCell(2).textContent = location.lastName;
        row.insertCell(3).textContent = location.address;
        row.insertCell(4).textContent = location.latitude;
        row.insertCell(5).textContent = location.longitude;
    }
});
