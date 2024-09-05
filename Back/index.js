// Importar Express y Path
const express = require('express');
const path = require('path');

// Inicializar la aplicación Express
const app = express();

// Definir el puerto para el servidor
const PORT = 3000;

// Servir archivos estáticos desde la carpeta Front/Presentacion
app.use(express.static(path.join(__dirname, '../Front/Presentacion')));

// Ruta principal para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front/Presentacion', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


//-----ENDPOINTS-------
/*
app.get('/api/clientes', controller.getAllLocations); //tomados de las funciones del controller quer a su vez se toman del DAO
app.get('/api/clientes/:id', controller.getLocationById);
app.post('/api/clientes', controller.createLocation);
app.put('/api/clientes/:id', controller.updateLocation);
app.delete('/api/clientes/:id', controller.deleteLocation);*/