const mysql = require('mysql2/promise');

class Database{
    static #instance = null;
    #pdo = null;

    constructor(){

        if (Database.#instance){
            return Database.#instance;
        }

        host = 'localhost';
        dbname = 'deudores_gota_gota';
        user = 'root';
        password = '';
        port = 3307;//quitar especificacion del puerto en otros pc

        this.#connect(host, dbname, user, password, port);
        Database.#instance = this;

    }

    async #connect(host, dbname, user, password, port){
        const dsn = {
            host: host,
            port: port,
            database: dbname,
            user: user,
            password: password
        };
    
        try {
            this.#pdo = await mysql.createConnection(dsn);
            console.log("Conexion exitosa");
        }catch (error){
           console.error("Falló la conexión:" + error.message);
        }
    }

    static getInstance(){
        if (!Database.#instance){
            Database.#instance = new Database();
        }
        return Database.#instance;
    }

    getPDO(){
        return this.pdo;
    }
};