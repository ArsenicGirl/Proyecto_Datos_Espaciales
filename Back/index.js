// Importar Express y Path
const express = require('express');
const path = require('path');
const ControllerLocations = require('./logica/ControllerLocations.js');
// Inicializar la aplicación Express
const app = express();

// Definir el puerto para el servidor
const PORT = 3000;

// Servir archivos estáticos desde la carpeta Front/Presentacion
app.use(express.static(path.join(__dirname, '../Front')));//app.use(express.static(path.join(__dirname, '../Front/Presentacion')));

// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front/Presentacion', 'index.html'));
});



//-----ENDPOINTS-------

app.get('/api/locations', ControllerLocations.getAllLocations); //tomados de las funciones del ControllerLocations quer a su vez se toman del DAO
app.get('/api/locations/:id', ControllerLocations.getLocationById);
app.post('/api/locations', ControllerLocations.createLocation);
app.put('/api/locations/:id', ControllerLocations.updateLocation);
app.delete('/api/locations/:id', ControllerLocations.deleteLocation);



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

