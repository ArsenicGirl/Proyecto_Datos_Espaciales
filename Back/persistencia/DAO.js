const Database = require('./Database'); 
const DTO = require('./DTO');


class DAO{

    constructor(){
        this.db = null;
    }

    async initialize(){
        const databaseInstance = await Satabase.getInstance();
        this.db = databaseInstance.getConnection();
    }
   


    async getAllCliente(DTO) {
      
    }

    async getClienteById() {
        
    }

    async createCliente() {
        
    }


    async updateCliente() {
        
    }

    async deleteCliente() {
        
    }
}