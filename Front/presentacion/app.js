document.addEventListener('DOMContentLoaded', () => {
    fetchLocations(); // Cargar locaciones al cargar la página
});

function fetchLocations() {
    fetch('http://localhost:3000/api/locations') // Asegúrate de usar la URL correcta
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('locationsTableBody'); // Asegúrate de usar el ID correcto
            tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

            data.forEach(location => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = location.loca_cc;
                row.insertCell(1).textContent = location.loca_name;
                row.insertCell(2).textContent = location.loca_lastName;
                row.insertCell(3).textContent = location.loca_address;
                row.insertCell(4).textContent = location.latitude;
                row.insertCell(5).textContent = location.longitude;
                row.insertCell(6).innerHTML = '<button onclick="editLocation(' + location.loca_id + ')">Editar</button>';
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function editLocation(id) {
    // Lógica para editar la locación
    console.log('Edit location with ID:', id);
}
