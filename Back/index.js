// Importar Express y Path
const express = require('express');
const path = require('path');
const ControllerLocations = require('./logica/ControllerLocations.js');

// Inicializar la aplicación Express
const app = express();

// Middleware para procesar JSON
app.use(express.json()); // Esto permite recibir JSON en solicitudes POST y PUT

// Definir el puerto para el servidor
const PORT = 3000;

// Servir archivos estáticos desde la carpeta Front/Presentacion
app.use(express.static(path.join(__dirname, '../Front/Presentacion')));

// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front/Presentacion', 'index.html'));
});

//-----ENDPOINTS-------
app.get('/api/locations', (req, res) => ControllerLocations.getAllLocations(req, res));
/*app.get('/api/locations/:id', (req, res) => ControllerLocations.getLocationById(req, res));
app.post('/api/locations', (req, res) => ControllerLocations.createLocation(req, res));
app.put('/api/locations/:id', (req, res) => ControllerLocations.updateLocation(req, res));
app.delete('/api/locations/:id', (req, res) => ControllerLocations.deleteLocation(req, res));
app.get('/api/locations/nearby', (req, res) => ControllerLocations.getLocationNearby(req, res));
*/
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
