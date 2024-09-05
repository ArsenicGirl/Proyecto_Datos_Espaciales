class LocationDTO {
    #cc;
    #name;
    #lastName;
    #address;
    #latitude;  // Latitud
    #longitude; // Longitud

    constructor(cc, name, lastName, address, latitude, longitude) {
        this.#cc = cc;
        this.#name = name;
        this.#lastName = lastName;
        this.#address = address;
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    getCc() {
        return this.#cc;
    }

    setCc(cc) {
        this.#cc = cc;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getLastName() {
        return this.#lastName;
    }

    setLastName(lastName) {
        this.#lastName = lastName;
    }

    getAddress() {
        return this.#address;
    }

    setAddress(address) {
        this.#address = address;
    }

    getLatitude() {
        return this.#latitude;
    }

    setLatitude(latitude) {
        this.#latitude = latitude;
    }

    getLongitude() {
        return this.#longitude;
    }

    setLongitude(longitude) {
        this.#longitude = longitude;
    }
}
