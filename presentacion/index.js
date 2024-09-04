// Importar Express
const express = require('express');
const path = require('path');

// Inicializar la aplicación Express
const app = express();

// Definir el puerto para el servidor
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'presentacion')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Cambiado 'index.html' a estar dentro de 'presentacion'
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
