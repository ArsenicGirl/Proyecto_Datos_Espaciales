const Database = require('./Database'); 
const LocationDTO = require('./LocationDTO');

class LocationDAO {
    constructor() {
        this.db = null;
    }

    async initialize() {
        const databaseInstance = await Database.getInstance();
        this.db = databaseInstance.getConnection();
    }

    async getAllLocations() {
        const query = `CALL get_locations();`; // Llama al procedimiento almacenado

        try {
            const [rows] = await this.db.execute(query);
            //me extrae desde el campo POINT (cords) la longitud y latitud            
            return rows.map(row => new LocationDTO(
                row.loca_cc,
                row.loca_name,
                row.loca_lastName,
                row.loca_address,
                row.latitude,
                row.longitude
            ));
        } catch (error) {
            console.error("No se pudo obtener las locaciones", error);
            throw error;
        }
    }

    async getLocationById(id) {
        const query = `CALL get_location_by_id(?);`;

        try {
            const [rows] = await this.db.execute(query, [id]);
            return rows[0];
        } catch (error) {
            console.error("No se puede obtener la locación por el ID", error);
            throw error;
        }
    }

    //obtener clientes cercanos a las coordenadas seleccionadas en el mapa
    async getLocationNearby(lat, lng) {
        const query = `CALL get_clients_nearby(?, ?);`;

        try {
            const [rows] = await this.db.execute(query, [lat, lng]);
            return rows;
        } catch (error) {
            console.error("No se pueden obtener locaciones cercanas", error);
            throw error;
        }
    }

    async createLocation(locationDTO) {
        const query = `CALL add_location(?, ?, ?, ?, ?, ?);`;

        const params = [
            locationDTO.getCc(),
            locationDTO.getName(),
            locationDTO.getLastName(),
            locationDTO.getAddress(),
            locationDTO.getLatitude(),
            locationDTO.getLongitude()
        ];

        try {
            const [result] = await this.db.execute(query, params);
            return result.insertId;
        } catch (error) {
            console.error("No se pudo crear la locación", error);
            throw error;
        }
    }

    async updateLocation(id, locationDTO) {
        const query = `CALL update_location(?, ?, ?, ?, ?, ?);`;

        const params = [
            id,
            locationDTO.getCc(),
            locationDTO.getName(),
            locationDTO.getLastName(),
            locationDTO.getAddress(),
            locationDTO.getLatitude(),//latitud del DTO
            locationDTO.getLongitude()//longitud del DTO
        ];

        try {
            const [result] = await this.db.execute(query, params);
            return result.affectedRows;
        } catch (error) {
            console.error("No se pudo actualizar la locación", error);
            throw error;
        }
    }

    async deleteLocation(id) {
        const query = `CALL delete_location(?);`;

        try {
            const [result] = await this.db.execute(query, [id]);
            return result.affectedRows;
        } catch (error) {
            console.error("No se pudo eliminar la locación", error);
            throw error;
        }
    }
}

module.exports = LocationDAO;

/*
const Database = require('./Database'); 
const LocationDTO = require('./LocationDTO');


class LocationDAO{

    constructor(){
        this.db = null;
    }

    async initialize(){
        const databaseInstance = await Database.getInstance();
        this.db = databaseInstance.getConnection();
    }
   


    async getAllLocations(locationDTO) {
        const query = `CALL get_locations();`; //llamada al PA

        try{
            const [rows] = await this.db.execute(query);
            //me extrae desde el campo POINT (cords) la longitud y latitud
            return rows.map(row => new LocationDTO({
                cc: row.loca_cc,
                name: row.loca_name,
                lastName: row.loca_lastName,
                address: row.loca_address,
                latitude: row.latitude,
                longitude: row.longitude
            }));
        }catch (error){
            console.error("No se pudo obtener las locaciones", error);
            throw error;
        }
    }

    async getLocationById(id) {
        const query = `CALL get_location_by_id;`;

        try{
            const [rows] = await this.db.execute(query, [id]);
            return rows[0];
        }catch(error){
            console.error("no se puede obtener el cliente por el Id ", error);
            throw error;
        }
    }

    //obtener clientes cercanos a las coordenadas seleccionadas en el mapa

    async getLocationNearby(lat, lng){
        const query = `CALL get_clients_nearby(?, ?)`

        try{
            const [rows] = await this.db.execute(query, [lat, lng]);
            return rows;
        }catch(error){
            console.error("No se puede reorganizar para pbtener clientes", error);
            throw error;
        }
    }

    async createLocation(locationDTO) {
        const query = `CALL add_location(?, ?, ?, ?, ?, ?)`;

        const params = [
            locationDTO.getCc(),
            locationDTO.getName(),
            locationDTO.getLastName(),
            locationDTO.getAddress(),
            locationDTO.getLatitude(),  // Latitud del DTO
            locationDTO.getLongitude()  // Longitud del DTO
        ];

        try {
            const [result] = await this.db.execute(query, params);
            return result.insertId;
        } catch (error) {
            console.error("Error al crear la locación", error);
            throw error;
        }
    }


    async updateLocation(id, locationDTO) {
        const query = `UPDATE locations
                       SET loca_cc = ?, 
                           loca_name = ?, 
                           loca_lastName = ?, 
                           loca_address = ?, 
                           loca_cords = POINT(?, ?)
                       WHERE loca_id = ?`;

        const params = [
            locationDTO.getCc(),
            locationDTO.getName(),
            locationDTO.getLastName(),
            locationDTO.getAddress(),
            locationDTO.getLatitude(),
            locationDTO.getLongitude(),
            id
        ];

        try {
            const [result] = await this.db.execute(query, params);
            return result.affectedRows;
        } catch (error) {
            console.error("Error al actualizar la locación", error);
            throw error;
        }
    }

    async deleteLocation(id) {
        const query = `DELETE FROM locations WHERE loca_id = ?`;

        try {
            const [result] = await this.db.execute(query, [id]);
            return result.affectedRows;
        } catch (error) {
            console.error("No se pudieron eliminar las locaciones", error);
            throw error;
        }
    }
}

module.exports = LocationDAO;*/