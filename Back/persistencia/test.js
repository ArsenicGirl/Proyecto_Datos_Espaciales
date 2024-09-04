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
