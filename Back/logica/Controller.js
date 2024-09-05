const LocationDAO = require('../persistencia/LocationDAO');
const LocationDTO = require('../persistencia/LocationDTO');


class Controller{
    constructor(){
        this.locationDAO = new LocationDAO();
        this.initialize();
    }

    async initialize(){
        await this.locationDAO.initialize();
    }

    async createLocation(req, res){
        try {
            
        } catch (error) {
            
        }
    }
}
