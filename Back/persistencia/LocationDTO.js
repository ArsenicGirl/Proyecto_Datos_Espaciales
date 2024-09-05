// LocationDTO.js
class LocationDTO {
    constructor(cc, name, lastName, address, latitude, longitude) {
        this.cc = cc;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getCc() {
        return this.cc;
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.lastName;
    }

    getAddress() {
        return this.address;
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }
}

module.exports = LocationDTO;
