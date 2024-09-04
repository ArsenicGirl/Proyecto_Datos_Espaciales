// Importa la clase Database desde tu archivo de conexión
const Database = require('./Database');

// Función asíncrona para probar la conexión
async function testDatabaseConnection() {
    try {
        // Obtén la instancia del Singleton de la base de datos
        const dbInstance = Database.getInstance();
        
        // Obtén el objeto de conexión PDO
        const connection = dbInstance.getConnection();

        // Realiza una consulta simple, como obtener la versión de MySQL
        const [rows] = await connection.query('SELECT VERSION()');
        console.log('Versión de MySQL:', rows[0]['VERSION()']);
    } catch (error) {
        console.error('Error durante la conexión a la base de datos:', error.message);
    } finally {
        if (dbInstance.getConnection()) {
            // Cierra la conexión
            await dbInstance.getConnection().end();
        }
    }
}

// Llama a la función para probar la conexión
testDatabaseConnection();
