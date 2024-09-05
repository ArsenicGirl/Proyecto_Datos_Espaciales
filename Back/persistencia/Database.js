const mysql = require('mysql2/promise');

class Database {
    static #instance = null;
    #pdo = null;

    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        Database.#instance = this;
    }

    async #connect(host, dbname, user, password, port) {
        const dsn = {
            host: host,
            database: dbname,
            user: user,
            password: password,
            port: port
        };

        try {
            this.#pdo = await mysql.createConnection(dsn);
            console.log("Conexión exitosa");
        } catch (error) {
            console.error("Falló la conexión: " + error.message);
        }
    }

    static async getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
            await Database.#instance.#connect('localhost', 'deudores_gota_gota', 'root', '', 3307);
        }
        return Database.#instance;
    }

    getConnection() {
        return this.#pdo;
    }
}

module.exports = Database;
