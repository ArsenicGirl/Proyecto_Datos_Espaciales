// Para lógica de Front (comunicación con el Back)
document.addEventListener('DOMContentLoaded', () => {
    fetchLocations(); // Cargar locaciones al cargar la página
});

function fetchLocations() {
    fetch('http://localhost:3000/api/locations') // Asegúrate de usar http://localhost:3000 si usas Express en ese puerto
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('locationTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

            // Asegúrate de que las claves del objeto coincidan con los campos devueltos por el backend
            data.forEach(location => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = location.loca_id; // Asegúrate de que el nombre del campo sea correcto
                row.insertCell(1).textContent = location.loca_cc;
                row.insertCell(2).textContent = location.loca_name;
                row.insertCell(3).textContent = location.loca_lastName;
                row.insertCell(4).textContent = location.loca_address;
                row.insertCell(5).textContent = location.latitude;
                row.insertCell(6).textContent = location.longitude;
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
