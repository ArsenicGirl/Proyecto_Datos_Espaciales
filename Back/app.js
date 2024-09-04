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
