const Database = require('./Database');

async function testDatabaseConnection() {
    try {
        const dbInstance = await Database.getInstance();
        if (dbInstance.getConnection()) {
            console.log('Conexión exitosa a la bd');
        } else {
            console.error('No se pudo obtener la conexión a la bd');
        }
    } catch (error) {
        console.error('Error durante la conexión a la base de datos:', error.message);
    }
}

testDatabaseConnection();
/*
//consulta de prueba para la conexion del dao y la bd
const LocationDAO = require('./LocationDAO');

(async () => {
    const locationDAO = new LocationDAO();
    await locationDAO.initialize();
    await locationDAO.testQuery(); // Ejecutar la consulta de prueba
})();*/

/*
//consulta de prueba que trae el JSON a la consola
const LocationDAO = require('./LocationDAO');

(async () => {
    const locationDAO = new LocationDAO();
    await locationDAO.initialize();
    const locations = await locationDAO.getAllLocations();
    console.log('Locaciones:', locations);
})();
*/
