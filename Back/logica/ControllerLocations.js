const LocationDAO = require('../persistencia/LocationDAO.js');
const LocationDTO = require('../persistencia/LocationDTO.js');
const Database = require('../persistencia/Database.js');
class ControllerLocations {
    constructor() {
        this.locationDAO = new LocationDAO();
        this.initialize();
    }

    async initialize() {
        await this.locationDAO.initialize();
    }

    async getAllLocations(req, res) {
        try {
            const locations = await this.locationDAO.getAllLocations();
            res.status(200).json(locations);
        } catch (error) {
            console.error("No se pudieron obtener las locaciones", error);
            res.status(500).json({ error: "No se pudieron obtener las locaciones" });
        }
    }

    async getLocationById(req, res) {
        try {
            const { id } = req.params;
            const location = await this.locationDAO.getLocationById(id);

            if (location) {
                res.status(200).json(location);
            } else {
                res.status(404).json({ error: "La locación no existe" });
            }
        } catch (error) {
            console.error("Error al obtener la locación", error);
            res.status(500).json({ error: "Error al obtener la locación" });
        }
    }

    async getLocationNearby(req, res) {
        try {
            const { lat, lng } = req.query;

            if (!lat || !lng) {
                return res.status(400).json({ error: "Coordenadas no proporcionadas" });
            }

            const locations = await this.locationDAO.getLocationNearby(parseFloat(lat), parseFloat(lng));
            res.status(200).json(locations);
        } catch (error) {
            console.error("Error al obtener locaciones cercanas", error);
            res.status(500).json({ error: "Error al obtener locaciones cercanas" });
        }
    }

    async createLocation(req, res) {
        try {
            const { cc, name, lastName, address, latitude, longitude } = req.body;
            const locationDTO = new LocationDTO(cc, name, lastName, address, latitude, longitude);
            const result = await this.locationDAO.createLocation(locationDTO);

            res.status(201).json({ id: result });
        } catch (error) {
            console.error("Error al crear la locación", error);
            res.status(500).json({ error: "Error al crear la locación" });
        }
    }

    async updateLocation(req, res) {
        try {
            const { id } = req.params;
            const { cc, name, lastName, address, latitude, longitude } = req.body;

            const locationDTO = new LocationDTO(cc, name, lastName, address, latitude, longitude);
            const result = await this.locationDAO.updateLocation(id, locationDTO);

            if (result > 0) {
                res.status(200).json({ message: "Se actualizó la locación" });
            } else {
                res.status(404).json({ message: "No se encontró la locación" });
            }
        } catch (error) {
            console.error("Error al actualizar la locación", error);
            res.status(500).json({ error: "Error al actualizar la locación" });
        }
    }

    async deleteLocation(req, res) {
        try {
            const { id } = req.params;
            const result = await this.locationDAO.deleteLocation(id);

            if (result > 0) {
                res.status(200).json({ message: "Locación eliminada con éxito" });
            } else {
                res.status(404).json({ error: "Locación no encontrada" });
            }
        } catch (error) {
            console.error("Error al eliminar la locación", error);
            res.status(500).json({ error: "Error al eliminar la locación" });
        }
    }
}

module.exports = new ControllerLocations();
