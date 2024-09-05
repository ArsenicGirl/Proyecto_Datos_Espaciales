//Para lógica de Front (comunicación con el Back)

document.getElementById('formularioCliente').addEventListener('submit', function(event){
    event.preventDefault();

    const location ={
        cc: document.getElementById('cc').value,
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        addres: document.getElementById('address').value,
        latitude: parseFloat(document.getElementById('lat').value),
        longitude: parseFloat(document.getElementById('lng')),
    };

    fetch('/api/locations', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(location)
    })

    .then(response => response.json())
    .then(data => {
        console.log('Locación creada:', data);
        document.getElementById('formularioCliente').reset();
        alert('Locación creada con éxito');
    })

    .catch(error => console.error('Error:', error));


});
